package com.peerlearning.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.peerlearning.backend.dto.UserDTO;
import com.peerlearning.backend.entity.User;
import com.peerlearning.backend.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody UserDTO dto) {
        return userService.registerUser(dto);
    }
}