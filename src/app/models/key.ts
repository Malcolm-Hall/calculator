import { Context } from "./context"
import { Display } from "./display"
import { MathValue } from "./math-value"

export interface Key extends Display {
    readonly gridArea: string
    operate: (context: Context) => void
}

export class NumericKey implements Key, MathValue {
    readonly mathValue: string

    constructor(
        readonly displayValue: string,
        readonly gridArea: string,
    ) {
        this.mathValue = displayValue;
    }

    operate(context: Context): void {
        if (context.outputDisplay) {
            context.clearContext();
        }
        context.addInput(this)
    }
}

export class MathKey implements Key, MathValue {
    constructor(
        readonly displayValue: string,
        readonly mathValue: string,
        readonly gridArea: string,
    ) { }

    operate(context: Context): void {
        if (context.outputDisplay) {
            context.clearContext();
            context.addInput(context.lastOutput);
        }
        context.addInput(this);
    }
}

export const keys: Array<Key> = [
    new NumericKey(
        '7',
        'seven',
    ),
    new NumericKey(
        '8',
        'eight',
    ),
    new NumericKey(
        '9',
        'nine',
    ),
    new NumericKey(
        '4',
        'four',
    ),
    new NumericKey(
        '5',
        'five',
    ),
    new NumericKey(
        '6',
        'six',
    ),
    new NumericKey(
        '1',
        'one',
    ),
    new NumericKey(
        '2',
        'two',
    ),
    new NumericKey(
        '3',
        'three',
    ),
    new NumericKey(
        '0',
        'zero',
    ),
    new NumericKey(
        '.',
        'dec',
    ),
    new MathKey(
        '×',
        '*',
        'mul',
    ),
    new MathKey(
        '÷',
        '/',
        'div',
    ),
    new MathKey(
        '+',
        '+',
        'add',
    ),
    new MathKey(
        '−',
        '-',
        'sub',
    ),
    {
        gridArea: 'del',
        displayValue: 'DEL',
        operate: (context: Context) => {
            context.leftInputs.pop();
            context.clearOutput();
        }
    },
    {
        gridArea: 'ac',
        displayValue: 'AC',
        operate: (context: Context) => {
            context.clearContext();
        }
    },
    {
        displayValue: 'Ans',
        gridArea: 'ans',
        operate: function (context: Context) {
            context.addInput({
                ...this,
                mathValue: context.lastOutput.mathValue
            })
        }
    },
    {
        gridArea: 'eq',
        displayValue: '=',
        operate: (context: Context) => {
            const expr = context.inputs.reduce((expr, { mathValue }) => expr += mathValue, '');
            const output = String(eval(expr));
            context.setOutput(output);
        }
    },
    {
        gridArea: 'left',
        displayValue: '<',
        operate: (context: Context) => {
            context.clearOutput();
            const leftInput = context.leftInputs.pop();
            if (leftInput) {
                context.rightInputs.unshift(leftInput);
            }
        }
    },
    {
        gridArea: 'right',
        displayValue: '>',
        operate: (context: Context) => {
            context.clearOutput();
            const rightInput = context.rightInputs.shift();
            if (rightInput) {
                context.leftInputs.push(rightInput);
            }
        }
    },
]