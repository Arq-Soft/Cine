package com.arquisoft.cine.service;

import com.arquisoft.cine.repository.MoviesRepository;
import com.arquisoft.cine.model.Movies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MoviesService {
    
    @Autowired
    private MoviesRepository repository;

    public Movies saveMovie(Movies Movies) {
        return repository.save(Movies);
    }

    public List<Movies> saveMovies(List<Movies> Movies) {
        return repository.saveAll(Movies);
    }

    public List<Movies> getMovies() {
        return repository.findAll();
    }

    public Movies getMovieById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Movies getMoviesByName(String name) {
        return repository.findByName(name);
    }


    public String deleteMovie(int id) {
        repository.deleteById(id);
        return "Movie removed !! " + id;
    }

    public Movies updateMovies(Movies Movies) {
        Movies existingMovies = repository.findById(Movies.getId()).orElse(null);
        existingMovies.setName(Movies.getName());
        existingMovies.setDirected_by(Movies.getDirected_by());
        existingMovies.setRunnin_time(Movies.getRunnin_time());
        existingMovies.setClassification(Movies.getClassification());
        existingMovies.setCountry(Movies.getCountry());
        existingMovies.setGenre(Movies.getGenre());
        existingMovies.setLanguage(Movies.getLanguage());
        existingMovies.setImage(Movies.getImage());
        return repository.save(existingMovies);
    }

}
