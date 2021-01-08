package com.arquisoft.cine.repository;

import com.arquisoft.cine.model.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<Movies,Integer> {
    Movies findByName(String name);
}