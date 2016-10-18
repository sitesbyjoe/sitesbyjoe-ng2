import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';

  toggleNav() {
    var body = document.body;
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    [body, burgerContain, burgerNav].forEach(function(el) {
      el.classList.toggle('open');
    });

  }

}
