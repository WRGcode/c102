//! property deco - this takes 2 arg
//* the target which is the constructor
//* name of the property
function PropLog(target: any, propertyName: string | Symbol) {
    console.log("PERPERTY DECO");
    console.log(target, propertyName);

}

//! accessor deco - 3 args (setter/getter)
//* target
//* name
//*description of the accessor method

function AccLog(target: any, name: string, description: PropertyDescriptor) {
    console.log("ACCESS DECO");
    console.log(target);
    console.log(name);
    console.log(description);
}

//! method deco - 3 args (setter/getter)
//* target
//* name
//*description of the method method

function MetLog(target: any, name: string, description: PropertyDescriptor) {
    console.log("METHOD DECO");
    console.log(target);
    console.log(name);
    console.log(description);
}

//! Parametter deco - 3 args (setter/getter)
//* target
//* name
//*index that the param 

function ParLog(target: any, name: string, position: number) {
    console.log("PARAMETTET DECO");
    console.log(target);
    console.log(name);
    console.log(position);
}


class Product {
    title: string;
    @PropLog
    private _price: number;

    @AccLog
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            new Error('invald price')
        }
    }
    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    @MetLog
    getPriceWithTax(tax: number = 0.12) {
        return this._price * (1+ tax)
    }
}