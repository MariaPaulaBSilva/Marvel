import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent {
  personagens = [
    { nome: 'Deadpool', imagem: '../assets/deadpool.png' },
    { nome: 'Iron Man', imagem: '../assets/ironman.png' },
    { nome: 'Thor', imagem: '../assets/thor.png' },
    { nome: 'Hulk', imagem: '../assets/hulk.png' },
    { nome: 'Captain America', imagem: '../assets/captain-america.png' }
  ];

  index = 0; 

  next() {
    if (this.index < this.personagens.length - 1) {
      this.index ++;
    } else {
      this.index = 0; 
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.personagens.length - 1; 
    }
  }
}