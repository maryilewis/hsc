import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-ship',
	templateUrl: './ship.component.html',
	styleUrls: ['./ship.component.less']
})
export class ShipComponent implements OnInit {
	public money: number = 300;
	public foodCapacity = 30;
	public fuelCapacity = 30;
	public food: number = this.foodCapacity;
	public fuel: number = this.fuelCapacity;

	public fuelConsumption = 1;
	public rations = 3;
	public crew: Array<string> = [];

	public speed: number = 3;

	get foodConsumtion() {
		return this.rations * (1 + this.crew.length);
	}

	constructor() { }

	ngOnInit(): void {
	}

	public passDay() {
		this.food -= this.foodConsumtion;
		this.fuel -= this.fuelConsumption;
	}

}
