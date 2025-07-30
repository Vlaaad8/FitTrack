package org.example.interfaces;

import java.util.List;
import java.util.Optional;

public interface Repository<T> {

    List<T> findAll();

    Optional<T> getById(int id);

    Optional<T> save(T entity);

    Optional<T> delete(int id);

    Optional<T> update(T entity);
}
