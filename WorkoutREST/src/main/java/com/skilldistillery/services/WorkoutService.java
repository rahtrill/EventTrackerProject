package com.skilldistillery.services;

import java.time.LocalDate;
import java.util.List;

import com.skilldistillery.entities.Workout;

public interface WorkoutService {
	
	List<Workout> index();
	
	Workout findById(int id);
	
	Workout addWorkout(Workout workout);
	
	Workout updateWorkout(Workout workout, int id);
	
	void removeWorkout(int id);
	
	List<Workout> getByDate(LocalDate date);
	
	List<Workout> getByType(String type);
	
}
