import { Display } from "./display";
import { MathValue } from "./math-value";

export class Context {
    inputs: Array<MathValue> = [];
    lastOutput: MathValue = {
        displayValue: 'Ans',
        mathValue: '0',
    };
    outputDisplay?: Display

    clear(): void {
        this.inputs = [];
        this.outputDisplay = undefined;
    }

    get inputDisplay(): Display {
        return {
            displayValue: this.inputs.map(value => value.displayValue).join("")
        }
    }

    setOutput(output: string): void {
        this.lastOutput.mathValue = output;
        this.outputDisplay = {
            displayValue: output
        }
    }
}
