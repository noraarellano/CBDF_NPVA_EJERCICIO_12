import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})

export class CalculadoraComponent {
  numero1: number= 0;
  numero2: number = 0;
  resultado: number = 0;

  sumarNumeros(){
    this.resultado = this.numero1 + this.numero2;
  }

  restarNumeros(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicarNumeros(){
    this.resultado = this.numero1 * this.numero2;
  }

  dividirNumeros(){
    if(this.numero2 == 0){
      alert('No se puede realizar la división');
    }else{
      this.resultado = this.numero1 / this.numero2;
    }
  }

  iniciarCampos(){
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }
}
