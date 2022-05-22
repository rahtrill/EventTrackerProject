import { WorkoutService } from './../../services/workout.service';
import { Workout } from './../../models/workout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editWorkout: Workout | null = null;

  constructor(private route: ActivatedRoute, private service: WorkoutService) { }

  ngOnInit(): void {
    if (!this.editWorkout && this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.show(parseInt(id));
      }
    }
  }

  show (id: number) {
    this.service.show(id).subscribe(
      (data) => this.editWorkout = data,
      (error) => console.log("Observable error showing workout for editWorkout: " + error)
    )
  }

  updateWorkout(workout: Workout) {
    if (this.editWorkout != null) {
      this.service.update(workout, this.editWorkout.id).subscribe(
        (data) => {console.log(data); this.editWorkout = null;},
        (error) => console.log("Observable error updating workout: " + error)
      )
    }
  }

}
