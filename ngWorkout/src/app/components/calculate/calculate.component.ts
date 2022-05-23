import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  met = 0;
  minutes = 0;
  weight = 0;
  caloriesBurned = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    this.caloriesBurned = this.minutes * (this.met * 3.5 * (this.weight * 0.454)) / 200;
  }

}
