import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newWorkout: Workout = new Workout();

  constructor(private service: WorkoutService) { }

  ngOnInit(): void {
  }

  addWorkout(workout: Workout) {
    this.service.create(workout).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log("Create Observable error: " + err)
  });
  }

}
