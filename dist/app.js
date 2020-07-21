"use strict";
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
// let num1 = 20;
// let num2 = 35;
// console.log(add(num1, num2))
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var store1 = new Department('toast');
console.log(store1);
store1.describe();
