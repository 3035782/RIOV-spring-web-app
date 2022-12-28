package ru.alina.api.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.alina.api.entity.Deliver;
import ru.alina.api.repo.DeliverRepo;

import java.util.List;
import java.util.Optional;

@Service
public class DeliverService {

    private final DeliverRepo deliverRepo;

    @Autowired
    public DeliverService(DeliverRepo deliverRepo) {
        this.deliverRepo = deliverRepo;
    }

    public Deliver createElement(Deliver deliver) {
        return deliverRepo.save(deliver);
    }

    public Deliver getElementById(Long id) throws EntityNotFoundException {
        Optional<Deliver> optionalDeliver = deliverRepo.findById(id);
        if (optionalDeliver.isEmpty()) throw new EntityNotFoundException();
        return optionalDeliver.get();
    }

    public List<Deliver> getAllElements() {
        return deliverRepo.findAll();
    }

    public Deliver updateElement(Long id, Deliver deliver) throws EntityNotFoundException {
        Optional<Deliver> optionalDeliver = deliverRepo.findById(id);
        if (optionalDeliver.isEmpty()) throw new EntityNotFoundException();
        Deliver dbOrder = optionalDeliver.get();

        // updating fields
        if (!deliver.getName().isEmpty()) dbOrder.setName(deliver.getName());
        dbOrder.setVerify(deliver.isVerify());

        return deliverRepo.save(dbOrder);
    }

    public boolean deleteElement(Long id) {
        Optional<Deliver> optionalDeliver = deliverRepo.findById(id);
        if (optionalDeliver.isEmpty()) throw new EntityNotFoundException();
        Deliver dbDeliver = optionalDeliver.get();

        deliverRepo.delete(dbDeliver);
        return true;
    }

}
