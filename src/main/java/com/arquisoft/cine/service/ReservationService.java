package com.arquisoft.cine.service;

import com.arquisoft.cine.repository.ReservationRepository;
import com.arquisoft.cine.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository repository;

    public Reservation saveReservation(Reservation Reservation) {
        return repository.save(Reservation);
    }

    public List<Reservation> saveReservation(List<Reservation> Reservation) {
        return repository.saveAll(Reservation);
    }

    public List<Reservation> getReservation() {
        return repository.findAll();
    }

    public Reservation getReservationById(int id) {
        return repository.findById(id).orElse(null);
    }

    
    public String deleteReservation(int id) {
        repository.deleteById(id);
        return "Reservation removed !! " + id;
    }

    public Reservation updateReservation(Reservation Reservation) {
        Reservation existingReservation = repository.findById(Reservation.getId()).orElse(null);
        existingReservation.setPaid_method(Reservation.getPaid_method());
        return repository.save(existingReservation);
    }

}
