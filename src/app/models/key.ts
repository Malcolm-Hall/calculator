import { Value } from "./value";

export interface Key {
    row: number
    col: number
    composable: boolean
    value: Value
}

export const keys: Array<Key> = [
    {
        row: 1,
        col: 1,
        composable: false,
        value: {
            displayValue: '7',
            mathValue: '7',
        }
    },
    {
        row: 1,
        col: 2,
        composable: false,
        value: {
            displayValue: '8',
            mathValue: '8',
        }
    },
    {
        row: 1,
        col: 3,
        composable: false,
        value: {
            displayValue: '9',
            mathValue: '9',
        }
    },
    {
        row: 2,
        col: 1,
        composable: false,
        value: {
            displayValue: '4',
            mathValue: '4',
        }
    },
    {
        row: 2,
        col: 2,
        composable: false,
        value: {
            displayValue: '5',
            mathValue: '5',
        }
    },
    {
        row: 2,
        col: 3,
        composable: false,
        value: {
            displayValue: '6',
            mathValue: '6',
        }
    },
    {
        row: 3,
        col: 1,
        composable: false,
        value: {
            displayValue: '1',
            mathValue: '1',
        }
    },
    {
        row: 3,
        col: 2,
        composable: false,
        value: {
            displayValue: '2',
            mathValue: '2',
        }
    },
    {
        row: 3,
        col: 3,
        composable: false,
        value: {
            displayValue: '3',
            mathValue: '3',
        }
    },
    {
        row: 4,
        col: 1,
        composable: false,
        value: {
            displayValue: '0',
            mathValue: '0',
        }
    },
    {
        row: 4,
        col: 2,
        composable: false,
        value: {
            displayValue: '.',
            mathValue: '.',
        }
    },
    {
        row: 1,
        col: 4,
        composable: false,
        value: {
            displayValue: 'DEL',
            inputOperation: (inputs: Array<Value>) => inputs.pop()
        }
    },
    {
        row: 1,
        col: 5,
        composable: false,
        value: {
            displayValue: 'AC',
            inputOperation: (inputs: Array<Value>) => inputs.length = 0
        }
    },
    {
        row: 2,
        col: 4,
        composable: true,
        value: {
            displayValue: '×',
            mathValue: '*',
        }
    },
    {
        row: 2,
        col: 5,
        composable: true,
        value: {
            displayValue: '÷',
            mathValue: '/',
        }
    },
    {
        row: 3,
        col: 4,
        composable: true,
        value: {
            displayValue: '+',
            mathValue: '+',
        }
    },
    {
        row: 3,
        col: 5,
        composable: true,
        value: {
            displayValue: '−',
            mathValue: '-',
        }
    },
    {
        row: 4,
        col: 4,
        composable: false,
        value: {
            displayValue: 'Ans'
        }
    },
    {
        row: 4,
        col: 5,
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