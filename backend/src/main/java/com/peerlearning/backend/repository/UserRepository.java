package com.peerlearning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.peerlearning.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}