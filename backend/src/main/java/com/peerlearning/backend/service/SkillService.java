package com.peerlearning.backend.service;

import com.peerlearning.backend.entity.Skill;
import com.peerlearning.backend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public Skill addSkill(String name) {

        Skill existing = skillRepository.findByName(name);

        if (existing != null) {
            return existing;
        }

        Skill skill = new Skill();
        skill.setName(name);

        return skillRepository.save(skill);
    }
}