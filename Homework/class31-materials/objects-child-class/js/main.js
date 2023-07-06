//Create an a class and extend it - Can be anything you would like it to be! 
class Vehicle {
    constructor(manufacturer, model, year){
        this._manufacturer = manufacturer;
        this._year = year;
        this._model = model;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    get model() {
        return this._model;
    }

    get year() {
        return this._year;
    }

    drive(){
        console.log('Vrrrrhmmm');
    }

    stop(){
        console.log('Vehicle stopped...');
    }
}

class Sedan extends Vehicle{
    constructor(manufacturer, model, year, noOfPassangers){
        super(manufacturer, model, year);
        this._noOfPassangers = noOfPassangers;
    }

    get noOfPassangers(){
        return this._noOfPassangers;
    }

    drive(){
        super.drive();
        console.log(`Driving away with ${this.noOfPassangers} passangers...`);
    }
}


const car1 = new Sedan('Lexus', 'LS-400', 2023, 4);

console.log(car1);