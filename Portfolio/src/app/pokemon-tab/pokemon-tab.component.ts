import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-tab',
  templateUrl: './pokemon-tab.component.html',
  styleUrls: ['./pokemon-tab.component.scss']
})
export class PokemonTabComponent {
  @ Input() item: any;
  @ Input() item2: any;
 @Output() updatedName= new EventEmitter <string> (); 
  name: string = 'from child to parent!';
  postdata(){
  this.updatedName.emit(this.name);
  }

}
