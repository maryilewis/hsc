import { Component, OnInit, Input } from '@angular/core';
import { ShipService } from '../ship/ship.service';
import { FormsModule , FormControl, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { AttachSession } from 'protractor/built/driverProviders';
import { SaleGood, ShopService, Shop } from './shop.service';
import { ALL_GOODS } from '../sell/sell.component';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {

	@Input()
	location: string;

	public inventory: Array<SaleGood> = [];

	public inventoryForm: FormGroup;

	get listControl(): FormArray {
		return this.inventoryForm.get("list") as FormArray;
	}

	get foodRate(): number {
		return this._shop.foodRate ? this._shop.foodRate : 3;
	}

	get foodControl(): FormControl {
		return this.inventoryForm.get("food") as FormControl;
	}

	get fuelRate(): number {
		return this._shop.fuelRate ? this._shop.fuelRate : 8;
	}

	get fuelControl(): FormControl {
		return this.inventoryForm.get("fuel") as FormControl;
	}

	get funds():number {
		return this.shipService.money;
	}

	get cartTotal(): number {
		return this._cartTotal;
	}

	private _cartTotal: number;

	private _shop: Shop;

	constructor(private shipService: ShipService, private shopService: ShopService) {

	}

	ngOnInit(): void {
		this._shop = this.shopService.shops.get(this.location);

		this.inventory = [];
		this._shop.goods.forEach(shopGood => {
			const rate = shopGood.typicalPrice + Math.ceil(Math.random() * shopGood.typicalVariance);
			this.inventory.push({
				good: {
					name: shopGood.name,
					description: shopGood.description
				},
				rate: rate,
				count: 100
			})
		});

		const controlArray = this.inventory.map(item => new FormControl(0));
	
		this.inventoryForm = new FormGroup({
			list: new FormArray(controlArray),
			food: new FormControl(0),
			fuel: new FormControl(0),
		});

		this.inventoryForm.valueChanges.subscribe(() => { this.updateTotal(); });
		this.updateTotal();

	}

	public updateTotal() {
		this._cartTotal = this.calculateCartTotal();
	}

	/**
	 * Calcualtes the value for cart total but diesn't change anything
	 * @returns total cart cost
	 */
	private calculateCartTotal(): number {
		let total = this.foodControl.value * this.foodRate;
		total += this.fuelControl.value * this.fuelRate;
		this.listControl.value.forEach((count, index) => {
			total += count * this.inventory[index].rate;
		});
		return total;
	}

	/**
	 * limit by funds and space for food
	 */
	public fillUpFood() {
		// target is how much the ship can hold
		const numberFit = this.shipService.foodCapacity - this.shipService.food;

		this.foodControl.setValue(0);

		const availableFunds = this.shipService.money - this.calculateCartTotal();

		const numberAfforable = Math.floor(availableFunds / this.foodRate);

		const finalNumber = Math.min(numberAfforable, numberFit);

		console.log(`fit: ${numberFit}, availableFunds: ${availableFunds}, numberAfforable: ${numberAfforable}, finalNumber: ${finalNumber},  `)

		this.foodControl.setValue(finalNumber);

	}

	/**
	 * limit by funds and space in fuel tank
	 */
	public fillUpFuel() {
		// target is how much the ship can hold
		const numberFit = this.shipService.fuelCapacity - this.shipService.fuel;

		this.fuelControl.setValue(0);

		const availableFunds = this.shipService.money - this.calculateCartTotal();

		const numberAfforable = Math.floor(availableFunds / this.fuelRate);
		
		const finalNumber = Math.min(numberAfforable, numberFit);

		this.fuelControl.setValue(finalNumber);
	}

	/**
	 * limit by funds and cargo space
	 *
	 * @param index
	 */
	public fillUpGood(index: number) {
		// target is how much the ship can hold
		let numberFit = this.shipService.cargoCapacity - this.shipService.cargoCount;

		// subtract other goods already in the shopping cart
		numberFit += this.listControl.value.reduce((acc, curr, idx) => {
			if (idx === index) {
				return acc;
			} else {
				return acc + curr;
			}
		}, 0);

		this.listControl.controls[index].setValue(0);

		const availableFunds = this.shipService.money - this.calculateCartTotal();

		const numberAfforable = Math.floor(availableFunds / this.inventory[index].rate);

		const finalNumber = Math.min(numberAfforable, numberFit);

		this.listControl.controls[index].setValue(finalNumber);

		console.log(`fit: ${numberFit}, availableFunds: ${availableFunds}, numberAfforable: ${numberAfforable}, finalNumber: ${finalNumber},  `)
	}

	/**
	 * Attempt to send goods to ship service
	 * Reset the form
	 */
	public buy() {
		this.listControl.value.forEach((count, i) => {
			this.shipService.buyGood(this.inventory[i], count);
			this.inventory[i].count -= count;
		});
		this.inventoryForm.reset();
	}

}



