package com.peerlearning.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SkillResponseDTO {

    private Long id;
    private String name;
    private String message;

    // Constructor for response with just id and name (for list responses)
    public SkillResponseDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
