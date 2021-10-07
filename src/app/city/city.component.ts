import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input()
  currentTemp: string;

  @Input()
  percentageRainChance: string;

  @Output()
  childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendData(cityName) {
    this.childEvent.emit(cityName);
  }

}
