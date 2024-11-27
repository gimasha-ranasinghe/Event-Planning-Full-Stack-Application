package com.gimasha.events_backend.repository;

import com.gimasha.events_backend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
