export class Workout {
  private id: number;
  private date: string;
  private type: string;
  private duration: number;
  private sets: number;
  private reps: number;
  private caloriesBurned: number;
  private bodyWeight: number;
  private details: string;

  constructor(
    id: number = 0,
    date: string = '',
    type: string = '',
    duration: number = 0,
    sets: number = 0,
    reps: number = 0,
    caloriesBurned: number = 0,
    bodyWeight: number = 0,
    details: string = ''
  ) {
    this.id = id;
    this.date = date;
    this.type = type;
    this.duration = duration;
    this.sets = sets;
    this.reps = reps;
    this.caloriesBurned = caloriesBurned;
    this.bodyWeight = bodyWeight;
    this.details = details;
  }
}
