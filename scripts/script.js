let input = document.getElementById("input-box");
let outputLog = document.getElementById("output-box");

function addingEventListener() {
    const inputBtn = document.getElementById("input-btn");

    function clickAlert() {
        alert("I was clicked!");
    }

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            updateOutputLog();
        }
    });

}

function updateOutputLog() {
    if (outputLog.value != "") {
        outputLog.value = `${outputLog.value}\n>${input.value}`;
        scrollOutputToBottom();
        input.value = "";
    }
    else {
        outputLog.value = `>${input.value}`;
        input.value = "";
    }
}

function scrollOutputToBottom() {
    outputLog.scrollTop = outputLog.scrollHeight;
}

addingEventListener();