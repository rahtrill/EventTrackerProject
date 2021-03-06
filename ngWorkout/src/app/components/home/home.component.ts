import { FilterPipe } from './../../pipes/filter.pipe';
import { DatePipe } from '@angular/common';
import { WorkoutService } from './../../services/workout.service';
import { Workout } from './../../models/workout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workouts: Workout[] = [];

  workout: Workout | null = null;
  filtered: string = "";
  filteredDate: string = "";

  constructor(private service: WorkoutService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.service.index().subscribe(
      (data) => this.workouts = data,
      (error) => console.log("Observable error reloading workout list: " + error)
    )
  }

  displayWorkout(workout: Workout) {
    this.workout = workout;
  }

  updateWorkout(id: number) {
    this.router.navigateByUrl("/update/"+id);
  }

  removeWorkout(id: number) {
    this.service.remove(id).subscribe(
      (success) => {console.log(success); this.reload()},
      (error) => console.log(error)
    )
  }

  addWorkout() {
    this.router.navigateByUrl("/create");
  }

}
