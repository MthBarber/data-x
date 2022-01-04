//Make array to store values to make a leaderboard
const leaderboard = [];
//Get access to values in form
const distance = document.getElementById('distance');
const fuelType = document.getElementById('fuelType');
const passengers = document.getElementById('passengers');

const calculateButton = document.getElementById('submit');

calculateButton.addEventListener("click", (e) => {
    e.preventDefault();
    calculateFunction();
    
})

const calculateFunction = (distance,fuelType,passengers) =>{
    let emissions = (distance * fuelType) / passengers;
        console.log(typeof(distance));
    return console.log(emissions);
}