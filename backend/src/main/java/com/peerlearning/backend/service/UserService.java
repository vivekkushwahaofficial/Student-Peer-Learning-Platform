package com.peerlearning.backend.service;

import com.peerlearning.backend.dto.LoginDTO;
import com.peerlearning.backend.dto.UserDTO;
import com.peerlearning.backend.dto.UserResponseDTO;
import com.peerlearning.backend.entity.User;
import com.peerlearning.backend.exception.AuthException;
import com.peerlearning.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

    }

    @Transactional
    public UserResponseDTO register(UserDTO userDTO) {
        String normalizedEmail = userDTO.getEmail().trim().toLowerCase();

        if (userRepository.findByEmail(normalizedEmail).isPresent()) {
            throw new AuthException("Email is already registered");
        }

        User user = new User();
        user.setName(userDTO.getName().trim());
        user.setEmail(normalizedEmail);
        user.setPassword(passwordEncoder.encode(userDTO.getPassword().trim()));
        user.setCollege(userDTO.getCollege().trim());
        user.setCourse(userDTO.getCourse().trim());

        User savedUser = userRepository.save(user);

        return buildUserResponse(savedUser, "Registration successful");
    }

    public UserResponseDTO login(LoginDTO loginDTO) {
        String normalizedEmail = loginDTO.getEmail().trim().toLowerCase();

        User user = userRepository.findByEmail(normalizedEmail)
                .orElseThrow(() -> new AuthException("Invalid email or password"));

        String rawPassword = loginDTO.getPassword().trim();
        String storedPassword = user.getPassword();

        // Backward-compatible check for legacy plaintext passwords already in DB.
        boolean validPassword = passwordEncoder.matches(rawPassword, storedPassword)
                || rawPassword.equals(storedPassword);

        if (!validPassword) {
            throw new AuthException("Invalid email or password");
        }

        return buildUserResponse(user, "Login successful");
    }

    private UserResponseDTO buildUserResponse(User user, String message) {
        return new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getCollege(),
                user.getCourse(),
                message
        );
    }
}
