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


export interface SaleGood {
	good: Good;
	rate: number;
	count: number;
}

export interface InventoryGood {
	good: Good;
	count: number;
}

export interface Good {
	name: string;
	description: string;
}



export interface Shop {
	name: string;
	description: string;
	location: string;
	goods: Array<ShopGood>;
	foodRate?: number;
	fuelRate?: number;
}

export interface ShopGood {
	name: string;
	description: string;
	typicalPrice: number;
	typicalVariance: number;
}

export const ALL_SHOPS: Array<Shop> = [{
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
