import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagemComponent } from "./imagem/imagem.component";
import { FrasesComponent } from "./frases/frases.component";
import { TextOverflowComponent } from './text-overflow/text-overflow.component';
import { BotaoComponent } from "./botao/botao.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImagemComponent, FrasesComponent, TextOverflowComponent, BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-biscoito';

}
