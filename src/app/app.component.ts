import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Key, keys } from './models/key';
import { Value } from './models/value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  inputs: Array<Value> = [];
  output?: Value;
  lastOutput?: Value;
  @ViewChild('caretEl')
  caretEl!: ElementRef;


  get keys() {
    return keys;
  }

  get lastAnswer(): Value {
    return {
      ...this.lastOutput,
      displayValue: 'Ans',
    }
  }

  get inputDisplay() {
    return this.inputs.map(value => value.displayValue).join("");
  }

  addInput({ composable, value }: Key): void {
    // TODO: cleanup
    if (value.outputOperation) {
      this.output = value.outputOperation(this.inputs);
      this.lastOutput = this.output;
    } else if (value.inputOperation) {
      this.output = undefined;
      value.inputOperation(this.inputs);
    } else if (value.displayValue === 'Ans') {
      if (this.lastOutput) {
        this.inputs = [this.lastAnswer];
        this.output = undefined;
      }
    } else {
      if (this.output) {
        this.inputs = composable ? [this.lastAnswer] : [];
        this.output = undefined;
      }
      this.inputs.push(value);
      this.caretEl.nativeElement.scrollIntoView({ inline: 'start' });
    }
  }
}
