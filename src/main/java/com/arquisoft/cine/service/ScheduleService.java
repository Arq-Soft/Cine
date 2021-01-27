package com.arquisoft.cine.service;

import com.arquisoft.cine.repository.ScheduleRepository;
import com.arquisoft.cine.model.Schedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository repository;

    public Schedule saveSchedule(Schedule Schedule) {
        return repository.save(Schedule);
    }

    public List<Schedule> saveSchedule(List<Schedule> Schedule) {
        return repository.saveAll(Schedule);
    }

    public List<Schedule> getSchedule() {
        return repository.findAll();
    }

    public Schedule getScheduleById(int id) {
        return repository.findById(id).orElse(null);
    }

    
    public String deleteSchedule(int id) {
        repository.deleteById(id);
        return "Schedule removed !! " + id;
    }

    public Schedule updateSchedule(Schedule Schedule) {
        Schedule existingSchedule = repository.findById(Schedule.getId()).orElse(null);
        existingSchedule.setHour(Schedule.getHour());
        existingSchedule.setAvailable_seats(Schedule.getAvailable_seats());
        return repository.save(existingSchedule);
    }

}
