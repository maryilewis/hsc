import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship/ship.service';
import { SaleGood, Good, InventoryGood } from '../shop/shop.component';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
	selector: 'app-sell',
	templateUrl: './sell.component.html',
	styleUrls: ['./sell.component.less']
})
export class SellComponent implements OnInit {

	public inventory: Array<InventoryGood> = [];

	public inventoryForm: FormGroup;

	get listControl(): FormArray {
		return this.inventoryForm.get("list") as FormArray;
	}

	get profit(): number {
		return this._profit;
	}

	private _profit = 0;

	constructor(private shipService: ShipService) { }

	ngOnInit(): void {

		this.inventory = Array.from(this.shipService.cargo.values());

		const controlArray = this.inventory.map(item => new FormControl(0));

		this.inventoryForm = new FormGroup({
			list: new FormArray(controlArray)
		});

		this.inventoryForm.valueChanges.subscribe(() => { this.updateProfit(); });
	}

	private updateProfit() {

	}

	public sell() {
		this.listControl.value.forEach((count, i) => {
			this.shipService.sellGood(this.inventory[i], count);
			// I need a shop service and buy/sell component so the things you sell end up int he shop, and prices are shared
			
		});
		this.inventoryForm.reset();
	}

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