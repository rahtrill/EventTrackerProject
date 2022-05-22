import { Router } from '@angular/router';
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

  constructor(private service: WorkoutService, private router: Router) { }

  ngOnInit(): void {
  }

  addWorkout(workout: Workout) {
    console.log(workout);

    this.service.create(workout).subscribe({
      next: (data) => {console.log(data); this.newWorkout = new Workout(); this.router.navigateByUrl("/home");},
      error: (err) => console.log("Create Observable error: " + err)
  });
  }

}
