package com.peerlearning.backend.controller;

import com.peerlearning.backend.dto.SkillResponseDTO;
import com.peerlearning.backend.entity.Skill;
import com.peerlearning.backend.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping("/add")
    public SkillResponseDTO addSkill(@RequestParam String name) {
        Skill skill = skillService.addSkill(name);
        return new SkillResponseDTO(skill.getId(), skill.getName(), "Skill added/retrieved");
    }

    // SAFE CONNECTION: Get all available skills
    @GetMapping
    public ResponseEntity<List<SkillResponseDTO>> getAllSkills() {
        List<Skill> skills = skillService.getAllSkills();
        List<SkillResponseDTO> response = skills.stream()
                .map(skill -> new SkillResponseDTO(skill.getId(), skill.getName()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    // SAFE CONNECTION: Get skill by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getSkill(@PathVariable Long id) {
        try {
            Skill skill = skillService.getSkillById(id);
            return ResponseEntity.ok(new SkillResponseDTO(skill.getId(), skill.getName(), "Skill retrieved"));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(404).body(new com.peerlearning.backend.dto.ErrorResponseDTO(
                    java.time.LocalDateTime.now(), 404, "Not Found", "Skill not found", "/api/skills/" + id
            ));
        }
    }

    // SAFE CONNECTION: Delete skill by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSkill(@PathVariable Long id) {
        try {
            skillService.deleteSkill(id);
            return ResponseEntity.ok(new SkillResponseDTO(id, null, "Skill deleted successfully"));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(404).body(new com.peerlearning.backend.dto.ErrorResponseDTO(
                    java.time.LocalDateTime.now(), 404, "Not Found", "Skill not found", "/api/skills/" + id
            ));
        }
    }
}
