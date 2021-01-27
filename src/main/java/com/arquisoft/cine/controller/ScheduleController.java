package com.arquisoft.cine.controller;

import com.arquisoft.cine.model.Schedule;
import com.arquisoft.cine.service.ScheduleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ScheduleController {

    @Autowired
    private ScheduleService service;

    @PostMapping("/addSchedule")
    public Schedule addSchedule(@RequestBody Schedule Schedule) {
        if(service.getScheduleById(Schedule.getId()) == null){
        return service.saveSchedule(Schedule);
        }
        else{return null;}
    }

    @PostMapping("/addSchedules")
    public List<Schedule> addSchedule(@RequestBody List<Schedule> Schedule) {
        return service.saveSchedule(Schedule);
    }

    @GetMapping("/Schedule")
    public List<Schedule> findAllSchedule() {
        return service.getSchedule();
    }

    @GetMapping("/ScheduleById/{id}")
    public Schedule findScheduleById(@PathVariable int id) {
        return service.getScheduleById(id);
    }

    @PutMapping("/Schedule/update")
    public Schedule updateSchedule(@RequestBody Schedule Schedule) {
        return service.updateSchedule(Schedule);
    }

    @DeleteMapping("/Schedule/delete/{id}")
    public String deleteSchedule(@PathVariable int id) {
        return service.deleteSchedule(id);
    }

    public ScheduleController() {
    }

}
