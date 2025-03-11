import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() frases = [
    "Ser ou não ser, eis a questão",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Acredite em você e tudo será possível.",
    "Grandes conquistas começam com pequenos passos.",
    "O impossível é apenas uma opinião.",
    "Você é mais forte do que imagina e mais capaz do que acredita.",
    "Fracasso não é o fim, é apenas uma lição no caminho para a vitória.",
    "Se você pode sonhar, pode realizar.",
    "A persistência realiza o impossível."
  ];

  @Input() frase = this.frases[Math.floor(Math.random() * 10)]; // Inicializa com a primeira frase
  @Input() exibir : boolean = true


}
