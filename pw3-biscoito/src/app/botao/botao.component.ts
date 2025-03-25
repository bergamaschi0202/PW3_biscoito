import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  imagem : boolean = true
  frase : boolean = true
  botao_quebrar : boolean = true
  botao_reiniciar : boolean = true
  foto="biscoito.png"

  quebrar(){
    this.foto = "biscoito-aberto.png"
    this.frase = true
    this.botao_quebrar = false
  }

  reiniciar(){
    this.foto="biscoito.png"
    this.botao_quebrar = true
  }
}
