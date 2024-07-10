import { Injectable } from '@angular/core';
import { Pc } from './pc-list/Pc';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcCartService {

  private _cartList: Pc[] = [];
  cartList: BehaviorSubject<Pc[]> = new BehaviorSubject(this._cartList);

  addToCart(Pc: Pc) {
    let item = this._cartList.find((v1) => v1.name == Pc.name )
    if(!item){
      this._cartList.push({...Pc});
    } else{
      item.quantity += Pc.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
