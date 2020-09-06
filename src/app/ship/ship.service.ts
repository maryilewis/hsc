import { Injectable } from '@angular/core';
import { CrewMember } from '../crew-member/crew-member.component';
import { Good, SaleGood } from '../shop/shop.component';

@Injectable({
	providedIn: 'root'
})
export class ShipService {
	public money: number = 300;
	public foodCapacity = 30;
	public fuelCapacity = 30;
	public cargoCapacity = 30;
	public food: number = this.foodCapacity;
	public fuel: number = this.fuelCapacity;
	public cargo: Map<string, {good: Good, count: number}> = new Map;

	public fuelConsumption = 1;
	public rations = 3;
	public crew: Array<CrewMember> = [];

	public speed: number = 3;

	public name = "The Ambit";

	get foodConsumption() {
		return this.rations * (1 + this.crew.length);
	}
	constructor() { }

	public buyGood(good: SaleGood, count: number): string {
		const name = good.good.name;
		if (this.cargo.has(name)) {
			const inventoryItem = this.cargo.get(name);
			inventoryItem.count += count;
		} else {
			this.cargo.set(name, {good: good.good, count: count});
		}
		this.money -= good.rate * count;
		
		return `You added ${count} ${good.good.name} to your inventory.`;
	}

	public passDay() {
		this.food -= this.foodConsumption;
		this.fuel -= this.fuelConsumption;
	}

}
