import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newWorkout: Workout = new Workout();

  constructor() { }

  ngOnInit(): void {
  }

  addWorkout(workout: Workout) {
    console.log(workout);
  }

}
