// boolean
const isDone: boolean = false;

// number
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// string
const color: string = "blue";

// array
const arr: number[] = [1, 2, 3];
const list: Array<number> = [1, 2, 3];

// tuple
let x: [string, number];
x = ["hello", 10];

// enum
enum Color { Red, Green, Blue };
const col: Color = Color.Green;

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// void
function warnUser(): void {
    alert("This is my warning message");
}