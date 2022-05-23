import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  workouts: Workout[] = [];

  highestWeight: number = 0;
  lowestWeight: number = 0;
  highestCalories: number = 0;
  lowestCalories: number = 0;
  highestReps: number = 0;
  lowestReps: number = 0;

  constructor(private service: WorkoutService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.service.index().subscribe(
      (data) => {this.workouts = data
      console.log(this.workouts);
      this.aggregate();
      },
      (error) => console.log("Observable error in workout reload: " + error)
    )
  }

  aggregate() {
    // Weight
    for (let workout of this.workouts) {
      if (workout.bodyWeight != null) {
        this.highestWeight = workout.bodyWeight;
        break;
      }
    }
    for (let workout of this.workouts) {
      if (workout.bodyWeight > this.highestWeight && workout.bodyWeight != null) {
        this.highestWeight = workout.bodyWeight;
      }
    }
    for (let workout of this.workouts) {
      if (workout.bodyWeight != null) {
        this.lowestWeight = workout.bodyWeight;
        break;
      }
    }
    for (let workout of this.workouts) {
      if (workout.bodyWeight < this.lowestWeight && workout.bodyWeight != null) {
        this.lowestWeight = workout.bodyWeight;
      }
    }
    // Calories
    for (let workout of this.workouts) {
      if (workout.caloriesBurned != null) {
        this.highestCalories = workout.caloriesBurned;
        break;
      }
    }
    for (let workout of this.workouts) {
      if (workout.caloriesBurned > this.highestCalories && workout.caloriesBurned != null) {
        this.highestCalories = workout.caloriesBurned;
      }
    }
    for (let workout of this.workouts) {
      if (workout.caloriesBurned != null) {
        this.lowestCalories = workout.caloriesBurned;
        break;
      }
    }
    for (let workout of this.workouts) {
      if (workout.caloriesBurned < this.lowestCalories && workout.caloriesBurned != null) {
        this.lowestCalories = workout.caloriesBurned;
      }
    }
    // Reps
    this.highestReps = this.workouts[0].reps;
    for (let workout of this.workouts) {
      if (workout.sets != null) {
        if (workout.reps * workout.sets > this.highestReps && workout.reps != null) {
          this.highestReps = workout.reps * workout.sets;
        }
      } else {
        if (workout.reps > this.highestReps) {
          this.highestReps = workout.reps;
        }
      }
    }
    this.lowestReps = this.workouts[0].reps;
    for (let workout of this.workouts) {
      if (workout.sets != null) {
        if (workout.reps * workout.sets < this.lowestReps && workout.reps != null) {
          this.lowestReps = workout.reps * workout.sets;
        }
      } else {
        if (workout.reps < this.lowestReps) {
          this.lowestReps = workout.reps;
        }
      }
    }
  }

}
