package com.peerlearning.backend.service;

import com.peerlearning.backend.dto.UserDTO;
import com.peerlearning.backend.entity.User;
import com.peerlearning.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository; // connect repository

    // register method using DTO
    public User registerUser(UserDTO dto) {

        // check if email already exists
        User existingUser = userRepository.findByEmail(dto.getEmail());

        if (existingUser != null) {
            throw new RuntimeException("Email already exists");
        }

        // convert DTO → Entity
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setCollege(dto.getCollege());
        user.setCourse(dto.getCourse());

        // save in DB
        return userRepository.save(user);
    }
}