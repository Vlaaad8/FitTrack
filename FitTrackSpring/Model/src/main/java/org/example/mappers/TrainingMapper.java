package org.example.mappers;


import org.example.dto.TrainingDTO;
import org.example.entities.Training;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TrainingMapper {

    TrainingMapper INSTANCE = Mappers.getMapper(TrainingMapper.class);

    TrainingDTO trainingToTrainingDTO(Training training);

    Training trainingDTOToTraining(TrainingDTO trainingDTO);
}
