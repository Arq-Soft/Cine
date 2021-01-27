package com.arquisoft.cine.repository;

import com.arquisoft.cine.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule,Integer> {
    
}
