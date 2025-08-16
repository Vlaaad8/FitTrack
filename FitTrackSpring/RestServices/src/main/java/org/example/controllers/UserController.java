package org.example.controllers;

import org.example.LoginRecord;
import org.example.User;
import org.example.service.ServiceApplication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack")
public class UserController {

    private final ServiceApplication service;

    public UserController(ServiceApplication service) {
        this.service = service;
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRecord loginRecord){
        return service.login(loginRecord.username(),loginRecord.password()).orElse(null);
    }
    @PostMapping("/register")
    public User register(@RequestBody User newUser){
        return service.register(newUser);
    }


}
