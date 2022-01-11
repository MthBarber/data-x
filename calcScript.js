//Make array to store values to make a leaderboard
const leaderboard = [];


//Get calculate button from HTML
const calculateButton = document.getElementById('submit');

//Function for carbon calculator
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
    let textNode = "";

    // code to prevent crashing from false inputs
    let incorrectPassengers = passengerCheck(passengers); 
    if (incorrectPassengers === true){
        return alert("Please enter a valid number of passengers");
    }
    let miles = milesCheck(distance);
    if (miles === true){
        return alert("Please enter a valid value for miles");
    } 
    //code to remove text from form output when code is ran to prevent build up
    formOutput.innerHTML = "";
    //+1 added in as dividing by 1 passenger does nothing, when really the footprint is halved
    let passengersNum = parseInt(passengers,10) + 1;     
    //algorithm for CO2 created
    let emissions = Math.round((distance * vehicle) / (passengersNum))/1000;     
    let div = document.createElement('div');
    leaderboard.push(emissions);
    //sort Array for leaderboard score 
    leaderboard.sort((a, b)=> a - b);    
    textNode = document.createTextNode("You produced " + emissions + "kg of CO2 for this journey");
    let currentPosition = leaderboard.indexOf(emissions);
    let leaderNode = document.createTextNode("You are position: " + (currentPosition + 1) + " on our leaderboard");
    div.appendChild(textNode);    
    formOutput.appendChild(div);    
    formOutput.appendChild(leaderNode);
    return console.table(leaderboard);
}

//form elements for hideable passenger section
const checkbox = document.getElementById('checkbox');
const passengersLabel = document.getElementById('passengersLabel');
const passengers = document.getElementById('passengers');

//function for hiding or showing "number of passengers" section
checkbox.addEventListener('change', (e)=>{    
    if (checkbox.value === "checked"){
        checkbox.value = "unchecked";
        passengers.style.display = "none";
        passengersLabel.style.display = "none";
        
        
    }else {
        checkbox.value = "checked";
        passengers.style.display = "flex";
        passengersLabel.style.display = "flex";
    }
});

//Begin code for making switch statement for number of passengers.

const passengerCheck = (passengers) => {
    let passengersNum = parseInt(passengers);
    switch (true) {
        case passengersNum == NaN: //Check passengers is a number           
            return true;
        case passengersNum < 0:   //checks its not less than 0     
            return true;            
              
        default: //function continues as normal           
            return false;

    }
}

//check for correct value for miles
const milesCheck = (distance) => {
    let milesNum = parseInt(distance);
    switch (true) {
        case milesNum == NaN:
            return true;
        case milesNum <= 0:
            return true;
        default:
            return false;
    }
}

