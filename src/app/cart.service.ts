import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }

  /**
   * 商品をカートに追加する.
   * 
   * @param product 商品
   */
  addToCart(product) {
    this.items.push(product);
  }

  /**
   * カートに追加されている商品を取得する.
   * 
   * @returns 商品の配列
   */
  getItems() {
    return this.items;
  }

  /**
   * カートをクリアする.
   */
  clarCart() {
    this.items = [];
    return this.items;
  }

  /**
   * 配送料を取得する
   * 
   * @return 配送料オブジェクト
   */
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
