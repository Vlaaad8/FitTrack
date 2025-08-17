package org.example.controllers;

import org.example.dto.TrainingDTO;
import org.example.entities.Training;
import org.example.mappers.TrainingMapper;
import org.example.service.ServiceApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/FitTrack/trainings")
public class TrainingController {

    private final ServiceApplication service;

    public TrainingController(ServiceApplication service) {
        this.service = service;
    }

    @GetMapping()
    public List<TrainingDTO> getTrainings() {
        return service.getAllTrainings().stream().map((TrainingMapper.INSTANCE::trainingToTrainingDTO)).toList();
    }

    @PutMapping("{id}")
    public TrainingDTO updateTraining(@PathVariable int id, @RequestBody TrainingDTO trainingDTO) {
        Training training = TrainingMapper.INSTANCE.trainingDTOToTraining(trainingDTO);
        return TrainingMapper.INSTANCE.trainingToTrainingDTO(service.updateTraining(id, training).orElse(null));
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
