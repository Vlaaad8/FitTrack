package org.example.repository;

import org.example.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Integer> {
    List<Reservation> findByUser_Id(int id);
    int countByTraining_Trainer(String trainer);

    @Query("SELECT COUNT(DISTINCT r.user) from Reservation r")
    int countActiveUsers();

    int countByTraining_Title(String title);

}
