package com.arquisoft.cine.controller;

import com.arquisoft.cine.model.Reservation;
import com.arquisoft.cine.service.ReservationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReservationController {

    @Autowired
    private ReservationService service;

    @PostMapping("/addReservation")
    public Reservation addReservation(@RequestBody Reservation Reservation) {
        if(service.getReservationById(Reservation.getId()) == null){
        return service.saveReservation(Reservation);
        }
        else{return null;}
    }

    @PostMapping("/addReservations")
    public List<Reservation> addReservation(@RequestBody List<Reservation> Reservation) {
        return service.saveReservation(Reservation);
    }

    @GetMapping("/Reservation")
    public List<Reservation> findAllReservation() {
        return service.getReservation();
    }

    @GetMapping("/ReservationById/{id}")
    public Reservation findReservationById(@PathVariable int id) {
        return service.getReservationById(id);
    }

    @PutMapping("/Reservation/update")
    public Reservation updateReservation(@RequestBody Reservation Reservation) {
        return service.updateReservation(Reservation);
    }

    @DeleteMapping("/Reservation/delete/{id}")
    public String deleteReservation(@PathVariable int id) {
        return service.deleteReservation(id);
    }

    public ReservationController() {
    }

}