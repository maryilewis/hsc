import { Injectable } from '@angular/core';
import { Shop, ALL_SHOPS } from '../model/shop.model';

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