import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})

export class InputNumberComponent implements OnInit{
  @Input() //comunicacion entre componentes
  quantity: number;

  @Input()
  available: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>;

  @Output()
  quantityAlert: EventEmitter<string> = new EventEmitter<string>;

  keybQuant: string = '';

  ngOnInit(): void{ };

  incQuantity(): void {
    console.log('disponible desde increase ' + this.available);
    if(this.quantity < this.available){
      this.quantity++;

    }else{
      this.quantity = this.available; 
      this.quantityAlert.emit("Se alcanzo la cantidad maxima para pedir");
    };

    this.quantityChange.emit(this.quantity);
    this.keybQuant = '';
  };
    
  decQuantity(): void {
    if(this.quantity > 0 && this.quantity <= this.available){
      this.quantity--;

    }else{
      this.quantity = 0; 
      this.keybQuant = '';
    };

    this.quantityChange.emit(this.quantity);
  };

  keyboardQuantity(event: KeyboardEvent): void {
    console.log('se presionó la tecla ' + event.key);

    event.preventDefault(); //para mantener el quantity actualizado correctamente

    if (event.key >= '0' && event.key <= '9') {
      this.keybQuant += event.key;  //acumular el número presionado
      console.log('la cantidad es ' + this.keybQuant);

      this.quantityChange.emit(Number(this.keybQuant));

    } else if (event.key === 'Backspace') {
        this.keybQuant = this.keybQuant.slice(0, -1);  //eliminar el último carácter en caso de Backspace
        this.quantityChange.emit(Number(this.keybQuant));
        console.log('backspace ' + this.keybQuant);

    }
    
  }

}

