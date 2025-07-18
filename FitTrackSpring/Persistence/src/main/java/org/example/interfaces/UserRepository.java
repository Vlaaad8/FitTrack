package org.example.interfaces;

import org.example.User;

import java.util.Optional;

public interface UserRepository extends Repository<User> {
    Optional<User> login(String username, String password);
}
