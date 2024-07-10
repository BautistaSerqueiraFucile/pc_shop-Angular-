import { Component } from '@angular/core';
import { Pc } from './Pc';
import { PcCartService } from '../pc-cart.service';
import { PcDataService } from '../pc-data.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrl: './pc-list.component.scss'
})
export class PcListComponent {

  Pcs : Pc[] = [];

constructor(private cart: PcCartService, private pcDataService : PcDataService){
}

ngOnInit(): void{
  this.pcDataService.getAll()
    .subscribe(Pcs => this.Pcs = Pcs);
}

addToCart(Pc: Pc){
  this.cart.addToCart(Pc)
  Pc.stock -= Pc.quantity;
  Pc.quantity = 0;
}

maxReached(msj: string){
  alert(msj);
}

}
