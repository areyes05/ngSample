import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  @Output() userLoggedOut = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  logout(): void {
    this.userLoggedOut.emit(false);
  }

}
