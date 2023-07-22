let snake = [{ top: 50, left: 50 }];
let score = 0;
let highScores = [];
let appleIndex = Math.floor(Math.random() * 30);

const gameBoard = document.getElementById("game-board");
const startScreen = document.getElementById("start-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const scoreSpan = document.getElementById("score");
const highScoresList = document.getElementById("high-scores");

function createDot(top, left, id, color) {
    let dot = document.createElement("div");
    dot.style.top = `${top}px`;
    dot.style.left = `${left}px`;
    dot.classList.add(color);
    dot.id = id;
    return dot;
}

function updateSnake() {
    const head = { ...snake[0] };
    switch (currentDirection) {
        case "ArrowLeft": head.left -= 10; break;
        case "ArrowRight": head.left += 10; break;
        case "ArrowUp": head.top -= 10; break;
        case "ArrowDown": head.top += 10; break;
    }
    snake.unshift(head);
    if (appleIndex !== 0) {
        snake.pop();
    } else {
        appleIndex = Math.floor(Math.random() * 30);
        let appleLeft = appleIndex * 10;
        let appleTop = appleIndex * 10;
        apple.style.left = `${appleLeft}px`;
        apple.style.top = `${appleTop}px`;
        score += 100;
        scoreSpan.textContent = score;
    }
    appleIndex--;
    if (head.left < 0 || head.left > 290 || head.top < 0 || head.top > 290 ||
        snake.find((dot, index) => index !== 0 && dot.left === head.left && dot.top === head.top)) {
        gameOver();
    }
}

function drawSnake() {
    document.querySelectorAll(".dot").forEach(dot => dot.remove());
    snake.forEach((dot, index) => {
        gameBoard.appendChild(createDot(dot.top, dot.left, `dot-${index}`, "dot"));
    });
}

function gameOver() {
    clearInterval(dotInterval);
    gameOverScreen.style.display = "block";
    highScores.push(score);
    highScores.sort((a, b) => b - a);
    highScores = highScores.slice(0, 3);
    highScoresList.innerHTML = highScores.map(score => `<li>${score}</li>`).join("");
}

function startGame() {
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    score = 0;
    scoreSpan.textContent = score;
    snake = [{ top: 150, left: 150 }];
    appleIndex = Math.floor(Math.random() * 30);
    let appleLeft = appleIndex * 10;
    let appleTop = appleIndex * 10;
    apple.style.left = `${appleLeft}px`;
    apple.style.top = `${appleTop}px`;
    currentDirection = "ArrowRight";
    dotInterval = setInterval(() => {
        updateSnake();
        drawSnake();
    }, 200);
    window.addEventListener("keydown", e => {
        switch (e.key) {
            case "ArrowLeft": if (currentDirection !== "ArrowRight") currentDirection = e.key; break;
            case "ArrowRight": if (currentDirection !== "ArrowLeft") currentDirection = e.key; break;
            case "ArrowUp": if (currentDirection !== "ArrowDown") currentDirection = e.key; break;
            case "ArrowDown": if (currentDirection !== "ArrowUp") currentDirection = e.key; break;
        }
    });
}


function restartGame() {
    gameOverScreen.style.display = "none";
    startGame();
}

window.onload = () => {
    startScreen.style.display = "block";
}
