package com.skilldistillery.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Integer>{
	
	List<Workout> findByDate(LocalDate date);
	
	List<Workout> findByType(String type);
	
}
