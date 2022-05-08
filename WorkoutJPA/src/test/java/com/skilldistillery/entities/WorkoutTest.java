package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class WorkoutTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Workout workout;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("WorkoutJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		workout = em.find(Workout.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		workout = null;
	}

	@Test
	@DisplayName("Workout entity mapping")
	void test() {
		
//		+----+---------------------+--------+----------+------+------+-----------------+-------------+---------------------------------------------+
//		| id | date                | type   | duration | sets | reps | calories_burned | body_weight | details                                     |
//		+----+---------------------+--------+----------+------+------+-----------------+-------------+---------------------------------------------+
//		|  1 | 2022-05-05 00:00:00 | Cardio |       45 |    3 |   10 |            NULL |         186 | I ran half a mile further thna usual today. |
//		+----+---------------------+--------+----------+------+------+-----------------+-------------+---------------------------------------------+
		
		assertNotNull(workout);
		assertEquals("Cardio", workout.getType());
		assertEquals(45, workout.getDuration());
		assertEquals(3, workout.getSets());
		assertEquals(10, workout.getReps());
		assertEquals(null, workout.getCaloriesBurned());
		assertEquals(186, workout.getBodyWeight());
		assertEquals("I ran half a mile further thna usual today.", workout.getDetails());
	}

}
