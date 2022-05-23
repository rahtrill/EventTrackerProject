import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from '../models/workout';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(workouts: Workout[], filtered: string): Workout[] {
    if (filtered === "") {
      return workouts;
    }

    return workouts.filter(workout => workout.date.includes(filtered));
  }

}
