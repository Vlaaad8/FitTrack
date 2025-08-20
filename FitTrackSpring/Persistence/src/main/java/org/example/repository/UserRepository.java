package org.example.repository;

import org.example.entities.Role;
import org.example.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
      Optional<User> findByUsername(String username);

//      @Query("SELECT COUNT(User.id) from User where User.role=:role")
//      int countUsersByRole(@Param("role") String role);
      int countByRole(Role role);
}
