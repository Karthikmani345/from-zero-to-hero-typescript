// @ string literal types

type custom = "karthik" | "aishu";


// declare a variable of type literal combined with union.
let fooLiteral: 'Hello' | 'welcome';
fooLiteral = 'Hello'; // Error: "Bar" is not assignable to type "Hello"


type CardinalDirection = "North" | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection) {
    // ...
}

move(1, "North"); // Okay
// move(1, "Nurth"); // Error!




type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;
