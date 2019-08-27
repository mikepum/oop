// oop example

class Car {
    constructor(name, engine) {
        this._name = name;
        this._engine = engine;
        this._mileage = 0;
    }
    get name() {
        return this._name;
    }
    get engine() {
        return this._engine;
    }
    get mileage() {
        return this._mileage;
    }
    increaseMileage(){
        this._mileage += 10000;
    }
} 

const rs4 = new Car("RS4", "4.2");
const honda = new Car("Accord","2.0");
const kia = new Car("Sportage", "1.6");

console.log(kia.name + " " + kia.engine);
console.log(rs4.name + " " + rs4.engine);
console.log(rs4.mileage);
rs4.increaseMileage();
console.log(rs4.mileage);
console.log(honda.name + " " + honda.engine);