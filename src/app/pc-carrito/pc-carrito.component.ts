import { Component } from '@angular/core';
import { PcCartService } from '../pc-cart.service';
import { Pc } from '../pc-list/Pc';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pc-carrito',
  templateUrl: './pc-carrito.component.html',
  styleUrl: './pc-carrito.component.scss'
})
export class PcCarritoComponent {
  cartList$: Observable<Pc[]>;

  constructor(private cart: PcCartService){
    this.cartList$ = cart.cartList.asObservable();
  }
}
