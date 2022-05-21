import { Workout } from './../../models/workout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newWorkout: Workout = new Workout();

  constructor() { }

  ngOnInit(): void {
  }

  addWorkout(workout: Workout) {
    console.log(workout);

  }

}
