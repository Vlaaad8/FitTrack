package org.example.controllers;

import org.example.Training;
import org.example.service.ServiceApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack/trainings")
public class TrainingController {

   private final ServiceApplication service;

    public TrainingController(ServiceApplication service) {
        this.service = service;
    }

    @GetMapping()
    public List<Training> getTrainings() {
        return service.getAllTrainings();
    }

    @PutMapping("{id}")
    public Training updateTraining(@PathVariable int id, @RequestBody Training training) {
        return service.updateTraining(id,training).orElse(null);
    }
    @GetMapping("trainers")
    public List<String> getTrainers() {
        return service.getTrainers();
    }
    @GetMapping("trainers/capacity")
    public int getTrainerCapacity(@RequestParam String trainerName) {
        return service.getTrainerCapacity(trainerName);
    }

}
