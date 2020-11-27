package com.arquisoft.cine.controller;

import com.arquisoft.cine.model.User;
import com.arquisoft.cine.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/* CrossOrigin nos permite controlar las peticiones al backend */

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
    
    @Autowired
    private UserService service;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User User) {
        if(service.getUserById(User.getId()) == null){
        return service.saveUser(User);
        }
        else{return null;}
    }

    @PostMapping("/addUsers")
    public List<User> addUsers(@RequestBody List<User> Users) {
        return service.saveUsers(Users);
    }

    @GetMapping("/Users")
    public List<User> findAllUsers() {
        return service.getUsers();
    }

    @GetMapping("/UserById/{id}")
    public User findUserById(@PathVariable int id) {
        return service.getUserById(id);
    }

    @GetMapping("/AutenticateUser/{id}/{password}")
    public User autenticateUser(@PathVariable int id,@PathVariable String password) {
        return service.autenticateUser(id, password);
    }

    @GetMapping("/User/{name}")
    public User findUserByName(@PathVariable String name) {
        return service.getUserByName(name);
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User User) {
        return service.updateUser(User);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id) {
        return service.deleteUser(id);
    }

    public UserController() {
    }
}
