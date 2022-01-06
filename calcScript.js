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
    let div = document.createElement('div');
    leaderboard.push(emissions);
    leaderboard.sort((a, b)=> a - b); //sort Array for leaderboard score    
    let textNode = document.createTextNode("You produced " + emissions + "kg of CO2 for this journey");
    let currentPosition = leaderboard.indexOf(emissions);
    let leaderNode = document.createTextNode("You are position: " + (currentPosition + 1) + " on our leaderboard");
    div.appendChild(textNode);    
    formOutput.appendChild(div);    
    formOutput.appendChild(leaderNode);
    return console.table(leaderboard);
}


const checkbox = document.getElementById('checkbox');
const passengersLabel = document.getElementById('passengersLabel').value;
const passengers = document.getElementById('passengers').value;

checkbox.addEventListener('change', (e)=>{
    if (this.checked){
        checkbox.value = "unchecked"
        console.log("not checked");
        passengersLabel.style.display = "flex";
    }else {
        console.log("checked");
        checkbox.value = "checked";
    }
});

//Begin code for making switch statement for number of passengers.

switch (passengers) {
    case NaN:
        alert("please enter a number.");
        break;
    case 0:
        alert("Please enter a number greater than zero.")
        break;
    

}

