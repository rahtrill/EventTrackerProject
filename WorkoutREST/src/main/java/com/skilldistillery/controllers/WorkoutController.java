package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Workout;
import com.skilldistillery.services.WorkoutService;

@RestController
@RequestMapping("api")
public class WorkoutController {
	
	@Autowired
	private WorkoutService service;
	
	@GetMapping("workouts")
	public List<Workout> index() {
		return service.index();
	}
	
	@GetMapping("workouts/{id}")
	public Workout findById(@PathVariable Integer id) {
		return service.findById(id);
	}
	
	@PostMapping("workouts")
	public Workout addWorkout(@RequestBody Workout workout) {
		return service.addWorkout(workout);
	}

}
