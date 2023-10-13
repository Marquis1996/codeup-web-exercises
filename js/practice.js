// let x = 6
//
// if(x== 4) {
//     console.log("this is the numbe 4")
// }else if (x == 5){
//     console.log("this number is 5")
// }else console.log("not a good number")


const creatDog =(name, gender, breed, weight, color, altered) =>{
    let result = {
        name,
        gender,
        breed,
        weight,
        color,
        altered,
        bark: function (){
            console.log(`${this.name}, a ${this.breed}, barked.`)
        },
    };
    return result;
};
class dog {
    constructor(name, breed, weight, color, alter) {
        this.name = name
        this.gender = gender
        this.breed = breed
        this.weight = weight
        this.color = color
        this.alter = alter
    }
    bark(){
        console.log(`${this.name}, fethced the ball`)
    }
}

class  Bulldog extends dog {
    constructor(name, gender, breed, weight, color, alter) {
        super(name, gender, breed, weight, color, alter);
    }

    bark() {
        console.log(`${this.name}, a ${this.breed}, snuffle growls and boogers popped out.`);
    }
}
creatDog()


const createcar = (make, model, type, topspeed) => {
    let result = {
        make,
        model,
        type,
        topspeed,
        drive: function (){
        console.log(`your car is a ${make} ${model} ${type} with a top speed of ${topspeed}`)
    },
};
return result;
};

class car1 {
    constructor(make, model, type, topspeed) {
        this.make = make;
        this.moder = model;
        this.type = type;
        this.topspeed = topspeed;
    }
}