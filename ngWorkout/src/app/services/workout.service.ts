import { Workout } from './../models/workout';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private url = environment.baseUrl + 'api/workouts';

  constructor(private http: HttpClient) { }

  create(workout: Workout) {
    return this.http.post<Workout>(this.url, workout).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Could not create the workout');
      })
    );
  }
}
