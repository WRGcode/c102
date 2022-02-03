let Unknown: unknown;

Unknown = "test"

const add2 = (n1: number) => {
    console.log(n1 + n1);
}

if (typeof (Unknown) === 'number') {
    add2(Unknown)
} else {
    console.log(Unknown);
}

type Combinable = number | string;
type Converision = "as-num" | "as-str"

const combine = (
    input1: Combinable,
    input2: Combinable,
    convert: Converision
): Combinable => {
    let result: Combinable
    if (convert == "as-num") {
        result = Number(input1) + +input2
        return result
    }
    if (convert == "as-str") {
        return "" + input1 + input2
    } else {
        return "not a valid Converision"
    }
}

//~~~~~~~~~~~~~~~~~~~~~


type Item = [name: string, quantity: number, price: number]

enum Title  {"new", "experienced", "vet"}

type hero = {
    health: number
    name: string
    stats: {
        str: number
        dex: number
        int: number
    }
    inventory:Item[]
    title: Title
}

function errorThrow(meassage: string, code: number): never {
throw new Error(meassage + ' ' + code)
}
