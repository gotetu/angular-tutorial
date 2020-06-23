import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('カートに設定した商品を取り出す', () => {
    service.addToCart({name: 'name', price: 199, description: 'description'});
    expect(service.getItems()).toEqual([{name: 'name', price: 199, description: 'description'}]);
  });
  it('カートに設定した空データを取り出す', () => {
    service.addToCart({name: '', price: 0, description: ''});
    expect(service.getItems()).toEqual([{name: '', price: 0, description: ''}]);
  });
  it('カートに設定した不正な値付け商品を取り出す', () => {
    service.addToCart({name: '意味のない商品', price: -1, description: '不正な値付け'});
    expect(service.getItems()).toEqual([{name: '意味のない商品', price: -1, description: '不正な値付け'}]);
  });
});
