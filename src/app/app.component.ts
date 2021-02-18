import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'ngSample';

  userLogAction(action: boolean): void {
    this.isLoggedIn = action;
  }
}
