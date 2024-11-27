package com.gimasha.events_backend.controller;

import com.gimasha.events_backend.exception.EventNotFoundException;
import com.gimasha.events_backend.model.Event;
import com.gimasha.events_backend.model.User;
import com.gimasha.events_backend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/event")
    Event newEvent(@RequestBody Event newEvent){
        return eventRepository.save(newEvent);
    }

    @GetMapping("/events")
    List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    @GetMapping("/event/{id}")
    Event getEventById(@PathVariable Long id){
        return eventRepository.findById(id)
                .orElseThrow(()->new EventNotFoundException(id));
    }

    @PutMapping("/event/{id}")
    Event updateEvent(@RequestBody Event newEvent,@PathVariable Long id){
        return eventRepository.findById(id)
                .map(event -> {
                    event.setTitle(newEvent.getTitle());
                    event.setDate(newEvent.getDate());
                    event.setLocation(newEvent.getLocation());
                    event.setDescription(newEvent.getDescription());
                    return eventRepository.save(event);
                }).orElseThrow(()->new EventNotFoundException(id));
    }

    @DeleteMapping("/event/{id}")
    String deleteEvent(@PathVariable Long id){
        if(!eventRepository.existsById(id)){
            throw new EventNotFoundException(id);
        }
        eventRepository.deleteById(id);
        return "Event with id "+id+" has been deleted successfully!";
    }

}
