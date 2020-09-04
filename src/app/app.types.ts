/**
 * I'm putting all the types in this file until I feel like breaking them out
 */

 
export type PortDetails = {
	name: string;
	shops?: Array<Shop>
}





export type Shop = {
	name: string;
	shopkeeper: Person;
	goods?: Array<SaleGood>;
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