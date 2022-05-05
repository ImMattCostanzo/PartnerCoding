//Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; a driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage
const car = {
    make: "Honda",
    model: "Civic",
    year: 1995,
    mileage: 201345,
    color: "blue",
    work: 33,
    aroundTheWorld: 24000,
    errands: 30,

driveToWork: function() {
    console.log(car.mileage + car.work);
},
driveAroundTheWorld: function() {
    console.log(car.mileage + car.aroundTheWorld)
},
runErrands: function() {
    console.log(car.mileage + car.errands)
}
};
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();


 