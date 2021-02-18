import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @Output() userLogged: EventEmitter<boolean>;

  constructor() {
    this.userLogged = new EventEmitter<boolean>();
  }

  email = 'alex';
  login(): void {
    if (this.email === 'alex') {
      this.userLogged.emit(true);
    }
  }
  ngOnInit(): void {
  }

}
