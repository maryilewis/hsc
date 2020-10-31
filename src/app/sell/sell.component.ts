import { Component, OnInit, Input } from '@angular/core';
import { ShipService } from '../ship/ship.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { SaleGood, Shop, InventoryGood } from '../model/shop.model';
import { ShopService } from '../shop/shop.service';

@Component({
	selector: 'app-sell',
	templateUrl: './sell.component.html',
	styleUrls: ['./sell.component.less']
})
export class SellComponent implements OnInit {

	@Input()
	location: string;

	public inventory: Array<SaleGood> = [];

	public inventoryForm: FormGroup;

	get listControl(): FormArray {
		return this.inventoryForm.get("list") as FormArray;
	}

	get profit(): number {
		return this._profit;
	}

	private _profit = 0;

	private _shop: Shop;

	constructor(private shipService: ShipService, private shopService: ShopService) { }

	ngOnInit(): void {

		this._shop = this.shopService.shops.get(this.location);

		this.shipService.cargo$.subscribe((cargo: Map<string, InventoryGood>) => {
			this.initializeForm(cargo);
		});
	}

	private initializeForm(cargo) {
		const temp = Array.from(cargo.values());
		this.inventory = temp.map(item => {
			(item as SaleGood).rate = 10;
			return item as SaleGood;
		});

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
			this.shipService.sellGood(this.inventory[i], count, 10);
			// I need to change the shop service so the things you sell end up in the shop, and prices are shared
			
		});
		this.inventoryForm.reset();
	}

	public sellAll(index: number) {
		this.listControl.controls[index].setValue(this.inventory[index].count);
	}

}