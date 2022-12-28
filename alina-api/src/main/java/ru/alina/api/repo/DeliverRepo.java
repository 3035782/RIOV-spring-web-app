package ru.alina.api.repo;

import org.springframework.data.repository.CrudRepository;
import ru.alina.api.entity.Deliver;

import java.util.List;

public interface DeliverRepo extends CrudRepository<Deliver, Long> {

    List<Deliver> findAll();

}
