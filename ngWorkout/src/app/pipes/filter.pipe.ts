import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from '../models/workout';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(workouts: Workout[], filtered: string, filteredDate: string): Workout[] {

    if (filtered === "" && filteredDate === "") {
      return workouts;
    } else if (filtered === "" && filteredDate !== "") {
      return workouts.filter(workout => workout.date.includes(filteredDate));
    } else if (filteredDate === "" && filtered !== "") {
      return workouts.filter(workout => workout.type.toLocaleLowerCase().includes(filtered.toLocaleLowerCase()));
    }

    return workouts.filter(workout => workout.type.toLocaleLowerCase().includes(filtered.toLocaleLowerCase()) && workout.date.includes(filteredDate));
  }

}
