// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOff = null;
let landing = null;
let missionAbort = null;
let flightStatus = null;
let shuttleBackground = null;
let shuttleHeight = null;
let rocket = null;
let up = null;
let down = null;
let right = null;
let left = null;

window.addEventListener("load", function() {
    takeOff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    rocket = document.getElementById("rocket");
    up = document.getElementById("up");
    down = document.getElementById("down");
    right = document.getElementById("right");
    left = document.getElementById("left");
    rocket.style.position = "relative";

    takeOff.addEventListener("click", function() {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            shuttleHeight.innerHTML = "10,000";
        }
    });

    landing.addEventListener("click", function() {
        let response = alert("The shuttle is landing. Landing gear engaged.");
        if (response) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = "0";
        }
    });

    missionAbort.addEventListener("click", function() {
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = "0";
        }
    });

    up.addEventListener("click", function() {
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) - 10 + "px";
    });

    down.addEventListener("click", function() {
        let positionString = rocket.style.bottom;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.bottom = Number(position) - 10 + "px";
    });

    right.addEventListener("click", function() {
        let positionString = rocket.style.right;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.right = Number(position) - 10 + "px";
    });

    left.addEventListener("click", function() {
        let positionString = rocket.style.left;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.left = Number(position) - 10 + "px";
    });

});