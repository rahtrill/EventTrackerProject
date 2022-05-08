package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Workout;
import com.skilldistillery.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	
	@Autowired
	private WorkoutRepository repo;

	@Override
	public List<Workout> index() {
		return repo.findAll();
	}

	@Override
	public Workout findById(int id) {
		
		Optional<Workout> op = repo.findById(id);
		Workout w = null;
		if (op.isPresent()) {
			w = op.get();
		}
		
		return w;
	}

	@Override
	public Workout addWorkout(Workout workout) {
		return repo.save(workout);
	}
	
}
