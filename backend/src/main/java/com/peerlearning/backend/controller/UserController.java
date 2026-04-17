package com.peerlearning.backend.controller;


import com.peerlearning.backend.entity.User;
import com.peerlearning.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public User getUserProfile(@RequestParam String email){
        return userService.getUserByEmail(email);
    }

}