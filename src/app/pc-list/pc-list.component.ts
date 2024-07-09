import { Component } from '@angular/core';
import { Pc } from './Pc';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrl: './pc-list.component.scss'
})
export class PcListComponent {
  Pcs: Pc[] = [
    {
    name: 'Master Race',
    type: 'Gamer',
    price: 1000000,
    stock: 12,
    image: 'img/gamer.webp',
    oferta: false,
    quantity: 0,
  },
  {
    name: 'Hollywood',
    type: 'Diseño',
    price: 700000,
    stock: 7,
    image: 'img/design.jfif',
    oferta: true,
    quantity: 0,
  },
  {
    name: 'Obra Maestra',
    type: 'Edicion',
    price: 950000,
    stock: 0,
    image: 'img/editing.jfif',
    oferta: false,
    quantity: 0,
  }
]
}
