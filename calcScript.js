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
    const formOutput = document.getElementsByClassName("formOutput");
    let emissions = distance  / passengers;
    leaderboard.push(emissions);
    leaderboard.sort();
    return console.table(leaderboard) + console.log(emissions);
}