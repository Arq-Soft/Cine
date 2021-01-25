package com.arquisoft.cine.controller;

import com.arquisoft.cine.model.Rooms;
import com.arquisoft.cine.service.RoomsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoomsController {

    @Autowired
    private RoomsService service;

    @PostMapping("/addRoom")
    public Rooms addRooms(@RequestBody Rooms Rooms) {
        if(service.getRoomById(Rooms.getId()) == null){
        return service.saveRoom(Rooms);
        }
        else{return null;}
    }

    @PostMapping("/addRooms")
    public List<Rooms> addRooms(@RequestBody List<Rooms> Rooms) {
        return service.saveRooms(Rooms);
    }

    @GetMapping("/Rooms")
    public List<Rooms> findAllRooms() {
        return service.getRooms();
    }

    @GetMapping("/RoomsById/{id}")
    public Rooms findRoomsById(@PathVariable int id) {
        return service.getRoomById(id);
    }


    @GetMapping("/Rooms/{name}")
    public Rooms findRoomsByName(@PathVariable String name) {
        return service.getRoomsByName(name);
    }

    @PutMapping("/Room/update")
    public Rooms updateRooms(@RequestBody Rooms Rooms) {
        return service.updateRooms(Rooms);
    }

    @DeleteMapping("/Room/delete/{id}")
    public String deleteRooms(@PathVariable int id) {
        return service.deleteRoom(id);
    }

    public RoomsController() {
    }

}
