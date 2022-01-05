//Make array to store values to make a leaderboard
const leaderboard = [];


//Get calculate button from HTML
const calculateButton = document.getElementById('submit');

calculateButton.addEventListener("click", (e) => {
    //Get access to values in form
const distance = document.getElementById('distance').value;
const vehicle = document.getElementById('vehicle').value;
const passengers = document.getElementById('passengers').value;
    e.preventDefault();
    calculateFunction(distance,vehicle,passengers);
    
})

const calculateFunction = (distance,vehicle,passengers) =>{     
    let formOutput = document.getElementById("formOutput");
    let emissions = ((distance * vehicle) / passengers) / 1000 ; //algorithm for CO2 created
    leaderboard.push(emissions);
    leaderboard.sort((a, b)=> a - b); //sort Array for leaderboard score
    let div = document.createElement('div');
    let textNode = document.createTextNode("You produced " + emissions + "kg of CO2 for this journey");
    let currentPosition = leaderboard.indexOf(emissions);
    let leaderNode = document.createTextNode("You are position: " + (currentPosition + 1) + " on our leaderboard");
    div.appendChild(textNode);    
    formOutput.appendChild(div);    
    formOutput.appendChild(leaderNode);
    return console.table(leaderboard);
}