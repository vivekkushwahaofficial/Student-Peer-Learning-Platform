package com.peerlearning.backend.repository;

import com.peerlearning.backend.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {

    // optional: find skill by name
    Skill findByName(String name);
}