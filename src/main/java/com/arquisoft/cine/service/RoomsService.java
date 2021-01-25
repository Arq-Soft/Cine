package com.arquisoft.cine.service;

import com.arquisoft.cine.repository.RoomsRepository;
import com.arquisoft.cine.model.Rooms;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoomsService {
    
    @Autowired
    private RoomsRepository repository;

    public Rooms saveRoom(Rooms Rooms) {
        return repository.save(Rooms);
    }

    public List<Rooms> saveRooms(List<Rooms> Rooms) {
        return repository.saveAll(Rooms);
    }

    public List<Rooms> getRooms() {
        return repository.findAll();
    }

    public Rooms getRoomById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Rooms getRoomsByName(String name) {
        return repository.findByName(name);
    }


    public String deleteRoom(int id) {
        repository.deleteById(id);
        return "Room removed !! " + id;
    }

    public Rooms updateRooms(Rooms Rooms) {
        Rooms existingRooms = repository.findById(Rooms.getId()).orElse(null);
        existingRooms.setName(Rooms.getName());
        existingRooms.settotal_capacity(Rooms.gettotal_capacity());
        return repository.save(existingRooms);
    }

}
