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
    let emissions = ((distance * vehicle) / passengers) / 1000 ;
    leaderboard.push(emissions);
    leaderboard.sort();
    let div = document.createElement('div');
    let textNode = document.createTextNode("You produced " + emissions + "kg of CO2 for this journey");
    div.appendChild(textNode);    
    formOutput.appendChild(div);
    return console.table(leaderboard) + console.log(vehicle) ;
}