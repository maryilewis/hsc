import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { InventoryGood, SaleGood } from '../model/shop.model';
import { CrewMember } from '../model/person.model';

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

	private _cargo: BehaviorSubject<Map<string, InventoryGood>> = new BehaviorSubject(new Map());

	get cargo(): Map<string, InventoryGood> {
		return this._cargo.getValue();
	}

	get cargo$(): Observable<Map<string, InventoryGood>> {
		return this._cargo.asObservable();
	}

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
		this.cargo.set("Plants", {
			good: {
				name: "Plants",
				description: "Nice and leafy"
			},
			count: 10
		});
		this._cargo.next(this.cargo);
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
		this._cargo.next(this.cargo);


		this.money -= good.rate * count;
		
		return `You added ${count} ${good.good.name} to your inventory.`;
	}

	public sellGood(good: InventoryGood, count: number, rate: number) {
		const goodRef = this.cargo.get(good.good.name);
		count = Math.min(goodRef.count, count);
		goodRef.count -= count;
		this.money += count * rate;
		this._cargo.next(this.cargo);
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
