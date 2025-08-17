package org.example.service;

import org.example.Reservation;
import org.example.Subscription;
import org.example.Training;
import org.example.User;
import org.example.repository.ReservationRepository;
import org.example.repository.SubscriptionRepository;
import org.example.repository.TrainingRepository;
import org.example.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ServiceApplication {


    private final UserRepository userRepository;
    private final ReservationRepository reservationRepository;
    private final TrainingRepository trainingRepository;
    private final SubscriptionRepository subscriptionRepository;

    public ServiceApplication(UserRepository userRepository, ReservationRepository reservationRepository, TrainingRepository trainingRepository, SubscriptionRepository subscriptionRepository) {
        this.userRepository = userRepository;
        this.reservationRepository = reservationRepository;
        this.trainingRepository = trainingRepository;
        this.subscriptionRepository = subscriptionRepository;
    }

    @Transactional(readOnly = true)
    public List<Training> getAllTrainings() {
        return trainingRepository.findAll();
    }

    @Transactional
    public Optional<Training> updateTraining(int id, Training training) {
        if (id == training.getId()) {
            Training foundTraining = trainingRepository.findById(id).orElse(null);
            if (foundTraining != null) {
                trainingRepository.save(training);
                return Optional.of(training);
            }
        }
        return Optional.empty();
    }

    @Transactional(readOnly = true)
    public Optional<User> login(String username, String password) {
        User user = userRepository.findByUsername(username).orElse(null);
        if (user != null) {
            if (BCrypt.checkpw(password, user.getPassword())) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }

    @Transactional
    public User register(User user) {
        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public List<Reservation> getUserReservations(int userId) {
        return reservationRepository.findByUser_Id(userId);
    }

    @Transactional
    public Reservation saveReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Transactional(readOnly = true)
    public Subscription getUserSubscription(int userId) {
        return subscriptionRepository.findCurrentSubscription(userId, LocalDate.now()).orElse(null);
    }

    @Transactional(readOnly = true)
    public List<String> getTrainers(){
        return trainingRepository.getTrainerNames();
    }

    @Transactional(readOnly = true)
    public int getTrainerCapacity(String trainerName) {
        return trainingRepository.getTrainerTotalCapacity(trainerName);
    }

    @Transactional(readOnly = true)
    public int getTrainerBookingCount(String trainerName) {
        return reservationRepository.countByTraining_Trainer(trainerName);
    }
}
