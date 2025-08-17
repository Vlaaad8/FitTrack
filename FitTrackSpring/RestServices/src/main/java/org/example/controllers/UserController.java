package org.example.controllers;

import org.example.LoginRecord;
import org.example.dto.UserDTO;
import org.example.entities.User;
import org.example.mappers.UserMapper;
import org.example.service.ServiceApplication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/FitTrack")
public class UserController {

    private final ServiceApplication service;

    public UserController(ServiceApplication service) {
        this.service = service;
    }

    @PostMapping("/login")
    public UserDTO login(@RequestBody LoginRecord loginRecord) {
        return UserMapper.INSTANCE.userToUserDTO(service.login(loginRecord.username(), loginRecord.password()).orElse(null));
    }

    @PostMapping("/register")
    public UserDTO register(@RequestBody UserDTO newUser) {
        User savedUser = UserMapper.INSTANCE.dtoToUser(newUser);
        return UserMapper.INSTANCE.userToUserDTO(service.register(savedUser));
    }


}
