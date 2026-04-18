package com.peerlearning.backend.service;

import com.peerlearning.backend.dto.LoginDTO;
import com.peerlearning.backend.entity.Skill;
import com.peerlearning.backend.entity.User;
import com.peerlearning.backend.repository.SkillRepository;
import com.peerlearning.backend.repository.UserRepository;
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

    // Get all available skills
    public java.util.List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    // Get skill by ID
    public Skill getSkillById(Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill not found"));
    }

    // Delete skill by ID
    public void deleteSkill(Long id) {
        if (!skillRepository.existsById(id)) {
            throw new RuntimeException("Skill not found");
        }
        skillRepository.deleteById(id);
    }
}
