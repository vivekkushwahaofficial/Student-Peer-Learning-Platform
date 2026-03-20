package com.peerlearning.backend.repository;

import com.peerlearning.backend.entity.UserSkill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSkillRepository extends JpaRepository<UserSkill, Long> {
}