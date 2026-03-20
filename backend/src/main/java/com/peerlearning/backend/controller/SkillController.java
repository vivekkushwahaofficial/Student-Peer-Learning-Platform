package com.peerlearning.backend.controller;

import com.peerlearning.backend.entity.Skill;
import com.peerlearning.backend.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping("/add")
    public Skill addSkill(@RequestParam String name) {
        return skillService.addSkill(name);
    }
}
