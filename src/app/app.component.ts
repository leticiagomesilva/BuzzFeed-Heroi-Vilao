import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizzComponent } from './componets/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizzComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buzzfeed';
}
