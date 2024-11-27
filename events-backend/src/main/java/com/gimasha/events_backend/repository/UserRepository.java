package com.gimasha.events_backend.repository;

import com.gimasha.events_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
