import { Display } from "./display";
import { MathValue } from "./math-value";

export class Context {
    leftInputs: Array<MathValue> = [];
    rightInputs: Array<MathValue> = [];
    lastOutput: MathValue = {
        displayValue: 'Ans',
        mathValue: '0',
    };
    outputDisplay?: Display

    clearContext(): void {
        this.leftInputs = [];
        this.rightInputs = [];
        this.outputDisplay = undefined;
    }

    get leftInputDisplay(): Display {
        return this.inputDisplay(this.leftInputs);
    }

    get rightInputDisplay(): Display {
        return this.inputDisplay(this.rightInputs);
    }

    private inputDisplay(inputs: Array<MathValue>): Display {
        return {
            displayValue: inputs.map(value => value.displayValue).join("")
        };
    }

    clearOutput(): void {
        this.outputDisplay = undefined;
    }

    setOutput(output: string): void {
        this.lastOutput.mathValue = output;
        this.outputDisplay = {
            displayValue: output
        }
    }

    addInput(input: MathValue): void {
        this.leftInputs.push(input);
    }

    get inputs(): Array<MathValue> {
        return this.leftInputs.concat(this.rightInputs);
    }
}
