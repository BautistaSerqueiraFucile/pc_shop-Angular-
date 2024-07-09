import { Component, Input} from '@angular/core';
import { Pc } from '../pc-list/Pc';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input() Pc!: Pc;

  upQuantity(Pc: Pc): void{
    if(Pc.quantity<Pc.stock){
      Pc.quantity++;
    }
  }
  
  downQuantity(Pc: Pc): void{
    if(Pc.quantity>0){
      Pc.quantity--;
    }
  }
}
