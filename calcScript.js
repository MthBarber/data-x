//Make array to store values to make a leaderboard
const leaderboard = [];

//Get calculate button from HTML
const calculateButton = document.getElementById('submit');

calculateButton.addEventListener("click", (e) => {
    //Get access to values in form
const distance = document.getElementById('distance').value;
const fuelType = document.getElementById('fuelType').value;
const passengers = document.getElementById('passengers').value;
    e.preventDefault();
    calculateFunction(distance,fuelType,passengers);
    
})

const calculateFunction = (distance,fuelType,passengers) =>{
    let emissions = distance  / passengers;
        console.log(typeof(distance));
        console.log("distance is..." + distance)
        console.log(emissions);
        let intEmissions = parseInt(emissions)
    return console.log(emissions) + console.log(intEmissions);
}