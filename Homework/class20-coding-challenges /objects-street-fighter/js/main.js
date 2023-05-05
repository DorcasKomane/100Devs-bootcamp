//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, gender, height, weapon){
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.weapon = weapon;

    this.kick = function kick(){
        console.log('Tiaaaaaaa!');
    }

    this.scream = function scream(){
        console.log('Woooooop!');
    }

    this.transfigure = function transfigure(){
        console.log('Changing into battle gear...');
    }
}
