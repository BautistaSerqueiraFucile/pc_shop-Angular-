import { Component } from '@angular/core';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrl: './pc-list.component.scss'
})
export class PcListComponent {
  pc_gamer = {
    "name":"Master Race",
    "type":"Gamer",
    "price":"1000000",
    "stock":"12",
    "image":"img/gamer.webp"
  }
}
