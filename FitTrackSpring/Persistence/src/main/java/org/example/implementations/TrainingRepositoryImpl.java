package org.example.implementations;

import org.example.HibernateUtils;
import org.example.Training;
import org.example.interfaces.TrainingRepository;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class TrainingRepositoryImpl implements TrainingRepository {
    @Override
    public List<Training> findAll() {
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Training").list();
        }
    }

    @Override
    public Optional<Training> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Training> save(Training entity) {
        return Optional.empty();
    }

    @Override
    public Optional<Training> delete(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Training> update(Training entity) {
        return Optional.empty();
    }
}
