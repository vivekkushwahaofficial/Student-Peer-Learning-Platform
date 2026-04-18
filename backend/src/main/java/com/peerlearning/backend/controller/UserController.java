package com.peerlearning.backend.controller;

import com.peerlearning.backend.dto.ErrorResponseDTO;
import com.peerlearning.backend.dto.UserResponseDTO;
import com.peerlearning.backend.entity.User;
import com.peerlearning.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // SECURITY FIX: Return UserResponseDTO instead of raw User entity (hides password)
    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(@RequestParam String email) {
        try {
            User user = userService.getUserByEmail(email);
            // Map User entity to response DTO (password excluded)
            UserResponseDTO response = new UserResponseDTO(
                    user.getId(),
                    user.getName(),
                    user.getEmail(),
                    user.getCollege(),
                    user.getCourse(),
                    "Profile retrieved"
            );
            return ResponseEntity.ok(response);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(404).body(
                    new ErrorResponseDTO(
                            java.time.LocalDateTime.now(),
                            404,
                            "Not Found",
                            "User not found",
                            "/api/users/profile"
                    )
            );
        }
    }

}
