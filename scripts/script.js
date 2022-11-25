let input = document.getElementById("input-box");
let output = document.getElementById("output-box");
let prevOutput = "";
let nextOutput = "";
let inputCount = 0;

function addingEventListener() {
    const inputBtn = document.getElementById("input-btn");

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            inputHandler();
        }
    });

}

function inputHandler() {
    prevOutput = output.value;
    if (input.value === "start") {
        nextOutput = output.value + `\n>${input.value}` + "\n>You're watching Adventure Call! My name is Falconhoof, I will be your guide on your quest. Greetings Line 4, what is your name?";
        updateOutputLog();
        inputCount++;
    }
    else {
        nextOutput = prevOutput + `\n>${input.value}`;
        updateOutputLog();
    }
}

function updateOutputLog() {
    output.value = nextOutput;
    scrollOutputToBottom();
    input.value = "";
}

function scrollOutputToBottom() {
    output.scrollTop = output.scrollHeight;
}

addingEventListener();