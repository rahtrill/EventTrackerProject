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

	@Override
	public Workout updateWorkout(Workout workout, int id) {
		
		if (id > 0) {
			workout.setId(id);
			return repo.save(workout);
		} else {
			return null;
		}
	}

	@Override
	public void removeWorkout(int id) {
		repo.delete(findById(id));
	}
	
}
