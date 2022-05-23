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

  highestWeight = 0;
  lowestWeight = 0;
  highestCalories = 0;
  lowestCalories = 0;
  mostType = "none";
  leastType = "none";
  highestReps = 0;
  lowestReps = 0;

  constructor(private service: WorkoutService) { }

  ngOnInit(): void {
    this.reload();
    this.aggregate();
  }

  reload() {
    this.service.index().subscribe(
      (data) => this.workouts = data,
      (error) => console.log("Observable error in workout reload: " + error)
    )
  }

  aggregate() {
    // Weight
  }

}
