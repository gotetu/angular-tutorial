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
   * ���i���J�[�g�ɒǉ�����.
   * 
   * @param product ���i
   */
  addToCart(product) {
    this.items.push(product);
  }

  /**
   * �J�[�g�ɒǉ�����Ă��鏤�i���擾����.
   * 
   * @returns ���i�̔z��
   */
  getItems() {
    return this.items;
  }

  /**
   * �J�[�g���N���A����.
   */
  clarCart() {
    this.items = [];
    return this.items;
  }

  /**
   * �z�������擾����
   * 
   * @return �z�����I�u�W�F�N�g
   */
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
