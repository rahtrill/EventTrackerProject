package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Workout;

public interface WorkoutService {
	
	List<Workout> index();
	
	Workout findById(int id);
	
	Workout addWorkout(Workout workout);
	
	Workout updateWorkout(Workout workout, int id);
	
	void removeWorkout(int id);
	
}
