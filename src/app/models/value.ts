export interface Value {
    displayValue: string
    mathValue?: string
    inputOperation?: (inputs: Array<Value>) => void,
    outputOperation?: (inputs: Array<Value>) => Value,
}
