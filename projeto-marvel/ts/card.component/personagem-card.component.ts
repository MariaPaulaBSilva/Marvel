import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personagem-card',
  templateUrl: './personagem-card.component.html',
  styleUrls: ['./personagem-card.component.css']
})
export class PersonagemCardComponent {
  @Input() nome!: string; 
  @Input() imagem!: string;
}