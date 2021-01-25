package com.arquisoft.cine.repository;

import com.arquisoft.cine.model.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomsRepository extends JpaRepository<Rooms,Integer> {
    Rooms findByName(String name);
}