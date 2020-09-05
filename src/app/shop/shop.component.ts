import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {

	public inventory: Array<SaleGood> = [];

	// going to want a form for this. love forms.

	constructor() {

	}

	ngOnInit(): void {
	}

	public buy() {

	}

}



export type SaleGood = {
	good: Good;
	price: number;
	number: number;
}

export type Good = {
	name: string;
	description: string;
}

export enum GoodTypes {
	"plants",
	"minerals",
}