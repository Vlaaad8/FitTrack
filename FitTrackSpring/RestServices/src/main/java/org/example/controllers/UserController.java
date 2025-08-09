package org.example.controllers;

import org.example.LoginRecord;
import org.example.User;
import org.example.interfaces.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public User login(@RequestBody LoginRecord loginRecord){
        return userRepository.login(loginRecord.username(), loginRecord.password()).orElse(null);
    }
    @PostMapping("/register")
    public User register(@RequestBody User newUser){
        return userRepository.save(newUser).orElse(null);
    }


}
