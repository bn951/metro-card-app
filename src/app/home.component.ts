import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [`
    .jumbotron {
      background-image: url('../assets/img/jumbotron.jpeg');
      background-size: cover;
      background-position: 50% 75%;;
    }
  `]
})

export class HomeComponent {}
