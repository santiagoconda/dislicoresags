import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navar } from "./home/navar/navar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'landingpagagslicores';
}
