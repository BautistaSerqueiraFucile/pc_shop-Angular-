import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pc } from '../pc-list/Pc';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input() quantity!: number;
  @Input() max!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else this.maxReached.emit("Se alcanzo el maximo")
  }
  
  downQuantity(): void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
