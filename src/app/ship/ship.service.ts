import { Injectable } from '@angular/core';
import { CrewMember } from '../crew-member/crew-member.component';
import { Good, SaleGood, InventoryGood } from '../shop/shop.component';

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
	public cargo: Map<string, InventoryGood> = new Map();

	public fuelConsumption = 1;
	public rations = 3;
	public crew: Array<CrewMember> = [];

	public speed: number = 3;

	public name = "The Ambit";

	get foodConsumption(): number {
		return this.rations * (1 + this.crew.length);
	}

	get cargoCount(): number {
		return Array.from(this.cargo.values()).reduce((acc, curr) => {
			return acc + curr.count;
		}, 0);
	}

	constructor() {
		
	}

	/**
	 * Attempts to add a good to cargo
	 * TODO:
	 * count input must be positive
	 * cost can't exceed money
	 * number of items can't exceed available cargo space
	 * 
	 * @param good The good to buy
	 * @param count How many
	 */
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

	public sellGood(good: InventoryGood, count: number) {
		const goodRef = this.cargo.get(good.good.name);
		goodRef.count -= count;
		// TODO get paid
	}

	/**
	 * Add person to crew
	 *
	 * @param person
	 */
	public hire(person: CrewMember) {
		this.crew.push(person);
	}

	public passDay() {
		this.food -= this.foodConsumption;
		this.fuel -= this.fuelConsumption;
	}

}
