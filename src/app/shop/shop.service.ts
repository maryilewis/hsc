import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
	public shops: Map<string, Shop>;

  constructor() {
	this.shops = new Map();
	ALL_SHOPS.forEach(shop => {
		this.shops.set(shop.location, shop);
	})
  }

}

export type SaleGood = {
	good: Good;
	rate: number;
	count: number;
}

export type InventoryGood = {
	good: Good;
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


export type Shop = {
	name: string;
	description: string;
	location: string;
	goods: Array<ShopGood>;
	foodRate?: number;
	fuelRate?: number;
}

export type ShopGood = {
	name: string;
	description: string;
	typicalPrice: number;
	typicalVariance: number;
}

const ALL_SHOPS: Array<Shop> = [{
	name: "Viridian Market",
	description: "An open air marketplace in the port of Viridia",
	location: "Viridia",
	goods: [{
		name: "Plants",
		description: "Nice and leafy.",
		typicalPrice: 30,
		typicalVariance: 10
	}]
}]
