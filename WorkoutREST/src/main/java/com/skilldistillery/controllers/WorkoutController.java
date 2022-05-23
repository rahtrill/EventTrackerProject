package com.skilldistillery.controllers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Workout;
import com.skilldistillery.services.WorkoutService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4202"})
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

	@PutMapping("workouts/{id}")
	public Workout updateWorkout(@RequestBody Workout workout, @PathVariable Integer id) {
		return service.updateWorkout(workout, id);
	}

	@DeleteMapping("workouts/{id}")
	public void removeWorkout(@PathVariable Integer id) {
		service.removeWorkout(id);
	}

	@GetMapping("workouts/search/date/{date}")
	public List<Workout> getByDate(@PathVariable String date) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate localDate = LocalDate.parse(date, formatter);
		
		return service.getByDate(localDate);
	}
	
	@GetMapping("workouts/search/type/{type}")
	public List<Workout> getByType(@PathVariable String type) {
		return service.getByType(type);
	}
	
}
