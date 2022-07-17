import { Component, ElementRef, ViewChild } from '@angular/core';
import { Context } from './models/context';
import { keys } from './models/key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  context = new Context();

  @ViewChild('caretEl') caretEl!: ElementRef;

  get keys() {
    return keys;
  }
}
