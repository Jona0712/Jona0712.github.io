function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states, visitedStates) {
    var location = states[0];
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);

    // Convert states to a string to use as a key in the visited states set
    var stateKey = states.join(",");
    if (visitedStates.has(stateKey)) {
        // If the state has already been visited, stop recursion
        return;
    }
    
    // Mark the state as visited
    visitedStates.add(stateKey);
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    
    // Continue to the next state after a delay
    setTimeout(function() { test(states, visitedStates); }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"];
var visitedStates = new Set(); // To track visited states
test(states, visitedStates);
