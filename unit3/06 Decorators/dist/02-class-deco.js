"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//! property deco - this takes 2 arg
//* the target which is the constructor
//* name of the property
function PropLog(target, propertyName) {
    console.log("PERPERTY DECO");
    console.log(target, propertyName);
}
//! accessor deco - 3 args (setter/getter)
//* target
//* name
//*description of the accessor method
function AccLog(target, name, description) {
    console.log("ACCESS DECO");
    console.log(target);
    console.log(name);
    console.log(description);
}
//! method deco - 3 args (setter/getter)
//* target
//* name
//*description of the method method
function MetLog(target, name, description) {
    console.log("METHOD DECO");
    console.log(target);
    console.log(name);
    console.log(description);
}
//! Parametter deco - 3 args (setter/getter)
//* target
//* name
//*index that the param 
function ParLog(target, name, position) {
    console.log("PARAMETTET DECO");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            new Error('invald price');
        }
    }
    getPriceWithTax(tax = 0.12) {
        return this._price * (1 + tax);
    }
}
__decorate([
    PropLog
], Product.prototype, "_price", void 0);
__decorate([
    AccLog
], Product.prototype, "price", null);
__decorate([
    MetLog
], Product.prototype, "getPriceWithTax", null);
