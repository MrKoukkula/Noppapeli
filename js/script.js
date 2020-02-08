(function init() {

    let startScreen = document.getElementById("startScreen");
    let gameScreen = document.getElementById("gameScreen");
    let startButton = document.getElementById("startButton");
    let playerName, noppa1, noppa2, noppa3, noppa4, noppa5;
    startButton.addEventListener("click", (e) => {
        playerName = document.getElementById("playerName").value;
        console.log(playerName);
        startScreen.style.display = "none";
        gameScreen.style.display = "block";
    })
})();