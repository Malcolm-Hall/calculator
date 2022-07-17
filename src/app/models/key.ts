import { Value } from "./value";

export interface Key {
    gridArea: string
    composable: boolean
    value: Value
}

export const keys: Array<Key> = [
    {
        gridArea: 'seven',
        composable: false,
        value: {
            displayValue: '7',
            mathValue: '7',
        }
    },
    {
        gridArea: 'eight',
        composable: false,
        value: {
            displayValue: '8',
            mathValue: '8',
        }
    },
    {
        gridArea: 'nine',
        composable: false,
        value: {
            displayValue: '9',
            mathValue: '9',
        }
    },
    {
        gridArea: 'four',
        composable: false,
        value: {
            displayValue: '4',
            mathValue: '4',
        }
    },
    {
        gridArea: 'five',
        composable: false,
        value: {
            displayValue: '5',
            mathValue: '5',
        }
    },
    {
        gridArea: 'six',
        composable: false,
        value: {
            displayValue: '6',
            mathValue: '6',
        }
    },
    {
        gridArea: 'one',
        composable: false,
        value: {
            displayValue: '1',
            mathValue: '1',
        }
    },
    {
        gridArea: 'two',
        composable: false,
        value: {
            displayValue: '2',
            mathValue: '2',
        }
    },
    {
        gridArea: 'three',
        composable: false,
        value: {
            displayValue: '3',
            mathValue: '3',
        }
    },
    {
        gridArea: 'zero',
        composable: false,
        value: {
            displayValue: '0',
            mathValue: '0',
        }
    },
    {
        gridArea: 'dec',
        composable: false,
        value: {
            displayValue: '.',
            mathValue: '.',
        }
    },
    {
        gridArea: 'del',
        composable: false,
        value: {
            displayValue: 'DEL',
            inputOperation: (inputs: Array<Value>) => inputs.pop()
        }
    },
    {
        gridArea: 'ac',
        composable: false,
        value: {
            displayValue: 'AC',
            inputOperation: (inputs: Array<Value>) => inputs.length = 0
        }
    },
    {
        gridArea: 'mul',
        composable: true,
        value: {
            displayValue: '×',
            mathValue: '*',
        }
    },
    {
        gridArea: 'div',
        composable: true,
        value: {
            displayValue: '÷',
            mathValue: '/',
        }
    },
    {
        gridArea: 'add',
        composable: true,
        value: {
            displayValue: '+',
            mathValue: '+',
        }
    },
    {
        gridArea: 'sub',
        composable: true,
        value: {
            displayValue: '−',
            mathValue: '-',
        }
    },
    {
        gridArea: 'ans',
        composable: false,
        value: {
            displayValue: 'Ans'
        }
    },
    {
        gridArea: 'eq',
        composable: false,
        value: {
            displayValue: '=',
            outputOperation: (inputs: Array<Value>) => {
                const expr = inputs.reduce((expr, { mathValue }) => expr += mathValue, '');
                const output = eval(expr);
                return {
                    displayValue: output,
                    mathValue: output,
                };
            }
        }
    }
]