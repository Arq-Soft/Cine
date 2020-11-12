package com.arquisoft.cine.service;

import com.arquisoft.cine.repository.UserRepository;
import com.arquisoft.cine.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User saveUser(User user) {
        return repository.save(user);
    }

    public List<User> saveUsers(List<User> users) {
        return repository.saveAll(users);
    }

    public List<User> getUsers() {
        return repository.findAll();
    }

    public User getUserById(int id) {
        return repository.findById(id).orElse(null);
    }

    public User getUserByName(String name) {
        return repository.findByName(name);
    }


    public String deleteUser(int id) {
        repository.deleteById(id);
        return "User removed !! " + id;
    }

    public User updateUser(User User) {
        User existingUser = repository.findById(User.getId()).orElse(null);
        existingUser.setName(User.getName());
        existingUser.setLastname(User.getLastname());
        existingUser.setEmail(User.getEmail());
        existingUser.setPhone(User.getPhone());
        existingUser.setId_type(User.getId_type());
        existingUser.setAdress(User.getAdress());
        existingUser.setDate_Birth(User.getDate_Birth());
        return repository.save(existingUser);
    }

	public User autenticateUser(int id, String password) {
        User existingUser = repository.findById(id).orElse(null);
        if (existingUser != null && existingUser.getPassword().equals(password)){
            return existingUser;
        }
		return null;
	}

}
