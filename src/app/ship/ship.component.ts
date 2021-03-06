import { Component, OnInit } from '@angular/core';
import { ShipService } from "./ship.service";
import { CrewMember } from '../model/person.model';
import { Good } from '../model/shop.model';

@Component({
	selector: 'app-ship',
	templateUrl: './ship.component.html',
	styleUrls: ['./ship.component.less']
})
export class ShipComponent implements OnInit {
	get money(): number {
		return this.shipService.money;
	}
	get foodCapacity(): number {
		return this.shipService.foodCapacity;
	}
	get fuelCapacity(): number {
		return this.shipService.fuelCapacity;
	}
	get food(): number {
		return this.shipService.food;
	}
	get fuel(): number {
		return this.shipService.fuel;
	}
	get fuelConsumption(): number {
		return this.shipService.fuelConsumption;
	}
	get foodConsumption(): number {
		return this.shipService.foodConsumption;
	}
	get rations(): number {
		return this.shipService.rations;
	}
	get crew(): Array<CrewMember> {
		return this.shipService.crew;
	}
	get speed(): number {
		return this.shipService.speed;
	}
	get name(): string {
		return this.shipService.name;
	}
	get cargo(): Array<{good: Good, count: number}> {
		return Array.from(this.shipService.cargo.values());
	}

	constructor(private shipService: ShipService) { }

	ngOnInit(): void {
	}


}
