import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship/ship.service';
import { FormsModule , FormControl, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {

	public inventory: Array<SaleGood> = [];

	public inventoryForm: FormGroup;

	get listControl(): FormArray {
		return this.inventoryForm.get("list") as FormArray;
	}

	get foodRate(): number {
		return 3;
	}

	get foodControl(): FormControl {
		return this.inventoryForm.get("food") as FormControl;
	}

	get fuelRate(): number {
		return 8;
	}

	get fuelControl(): FormControl {
		return this.inventoryForm.get("fuel") as FormControl;
	}

	constructor(private shipService: ShipService) {

	}

	ngOnInit(): void {
		this.inventory = [{
			good: ALL_GOODS[0],
			rate: 3,
			count: 100
		}];

		const controlArray = this.inventory.map(item => new FormControl(0));
	
		this.inventoryForm = new FormGroup({
			list: new FormArray(controlArray),
			food: new FormControl(0),
			fuel: new FormControl(0),
		});

		// for (let item of this.inventory) {
		// 	// initalize to purchasing 0 of each thing
		// 	this.list.push(new FormControl(0));
		// }
	}

	/**
	 * Attempt to send goods to ship service
	 * Reset the form
	 */
	public executeTransaction() {
		this.listControl.value.forEach((count, i) => {
			this.shipService.buyGood(this.inventory[i], count);
			this.inventory[i].count -= count;
		});
		this.inventoryForm.reset();
	}

}



export type SaleGood = {
	good: Good;
	rate: number;
	count: number;
}

export type Good = {
	name: string;
	description: string;
}


export const ALL_GOODS: Array<Good> = [{
	name: "Plants",
	description: "Nice and leafy."
}, {
	name: "Minerals",
	description: "Go well with Vitamins."
}, {
	name: "Diamonds",
	description: "Extremely valuable small rocks."
}, {
	name: "Cat Pushies",
	description: "Soft and friendly."
}]