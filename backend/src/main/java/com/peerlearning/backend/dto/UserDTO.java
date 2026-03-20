package com.peerlearning.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

    private String name;
    private String email;
    private String password;
    private String college;
    private String course;
}