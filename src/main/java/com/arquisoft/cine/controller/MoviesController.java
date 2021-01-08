package com.arquisoft.cine.controller;

import com.arquisoft.cine.model.Movies;
import com.arquisoft.cine.service.MoviesService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MoviesController {

    @Autowired
    private MoviesService service;

    @PostMapping("/addMovie")
    public Movies addMovies(@RequestBody Movies Movies) {
        if(service.getMovieById(Movies.getId()) == null){
        return service.saveMovie(Movies);
        }
        else{return null;}
    }

    @PostMapping("/addMovies")
    public List<Movies> addMovies(@RequestBody List<Movies> Movies) {
        return service.saveMovies(Movies);
    }

    @GetMapping("/Movies")
    public List<Movies> findAllMovies() {
        return service.getMovies();
    }

    @GetMapping("/MoviesById/{id}")
    public Movies findMoviesById(@PathVariable int id) {
        return service.getMovieById(id);
    }


    @GetMapping("/Movies/{name}")
    public Movies findMoviesByName(@PathVariable String name) {
        return service.getMoviesByName(name);
    }

    @PutMapping("/Movie/update")
    public Movies updateMovies(@RequestBody Movies Movies) {
        return service.updateMovies(Movies);
    }

    @DeleteMapping("/Movie/delete/{id}")
    public String deleteMovies(@PathVariable int id) {
        return service.deleteMovie(id);
    }

    public MoviesController() {
    }

}
