const player1=document.getElementById("player1");
const player2=document.getElementById("player2");
const indicator=document.getElementById("indicator");
const retry=document.getElementById("retry");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let status="Start"
let startTime;
indicator.addEventListener("click", start)
player1.addEventListener("click", player1Click);
player2.addEventListener("click", player2Click);
retry.addEventListener("click", tryAgain)

window.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase(); 
    if (key === "a") {
        player1Click(event);
    } else if (key === "l") {
        player2Click(event);
    }
});

async function start() {
    if (status !== "Start") return;

    status = "Wait...";
    indicator.textContent = "Wait...";

    let random = Math.floor(Math.random() * 10) + 1;

    await sleep(random * 1000);
    startTime = Date.now();

    status = "Go!";
    indicator.classList.add("active")
    indicator.textContent = "GO!";
}

function player1Click() {
    if (status === "Wait...") {
        status = "Finished";
        indicator.textContent = "Player 1 clicked to early!";
    } else if (status === "Go!") {
        status = "Finished";
        const reactionTime = Date.now() - startTime;
        indicator.textContent = `Player 1 wins! ${reactionTime} ms`;
    }
}

function player2Click() {
    if (status === "Wait...") {
        status = "Finished";
        indicator.textContent = "Player 2 clicked to early!!";
    } else if (status === "Go!") {
        status = "Finished";
        const reactionTime = Date.now() - startTime;
        indicator.textContent = `Player 2 wins! ${reactionTime} ms`;
    }
}

function tryAgain() {
    status="Start"
    indicator.textContent="Start"
    indicator.classList.remove("active")
}