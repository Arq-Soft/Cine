package com.arquisoft.cine.repository;

import com.arquisoft.cine.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation,Integer> {
    
}
