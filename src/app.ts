// function add(n1: number, n2: number) {
//     return n1 + n2;
// }

// let num1 = 20;
// let num2 = 35;

// console.log(add(num1, num2))

class Department {
    name: string;

    constructor(n: string) {
        this.name = n
    }

    describe(this: Department) {
        console.log('Department: ' + this.name)
    }
}

const store1 = new Department('toast');

console.log(store1)

store1.describe()