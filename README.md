# games-and-visual-art


<br>

# Early days 



|                     | Atari 600XL                       | Intellivision ECS                                   | ABC 80                     |
|---------------------|-----------------------------------|-----------------------------------------------------|----------------------------|
| **Launch Year**         | **1983**                              | **1983**                                                | **1978**                       |
| Graphics Capabilities | 320x192 resolution with a 256-color palette | 159x192 in 16 colors | Text and block graphics, monochrome |
| Sound Capabilities  | 4 sound channels with a range of three octaves | 3 sound channels, noise generator | Simple beeper |
| Controller/Input    | Keyboard and Joystick             | Intellivision unique controller                     | Full-size Keyboard         |
| Game Library        | Large, with many popular arcade ports | Varied, with a mix of original and licensed titles | Limited, mostly educational and simple games |
| Primary Purpose     | Gaming and Home Computing         | Gaming and Basic Computing                          | Education and Business Computing |
| Notable/Advanced Games | "Star Raiders" (Doug Neubauer), "Ballblazer" (Lucasfilm Games), "Rescue on Fractalus!" (Lucasfilm Games) | "Utopia" (Don Daglow), "B-17 Bomber" (John Sohl, Blue Sky Rangers), "Advanced Dungeons & Dragons: Treasure of Tarmin" (Tom Loughry, APh Technological Consulting) | "Mutant Camels" (Llamasoft), "Space Action" (unknown), "Shoot the Moon" (unknown) |
| Development Method  | Mostly Assembly language (6502 Assembly) | Mostly Assembly language (CP1610 Assembly) | Mostly Assembly language (Z80 Assembly), and BASIC for simpler games |
| Developers of Hit Games | Various, including in-house at Atari and third-party companies like Lucasfilm Games | Various, including in-house at Mattel (Blue Sky Rangers) and third-party companies like APh Technological Consulting | Various, including independent developers like Llamasoft |
| Successor Platform (Launch Year) | Atari 800XL (1983) | Intellivision II (1982) | ABC 800 (1981) |

<br>

## Intellivision (1983)


The Intellivision Entertainment Computer System (ECS) was essentially an add-on for the Intellivision that turned it into a rudimentary personal computer, with the capability to run a variant of the BASIC programming language.

The ECS BASIC was provided in a ROM cartridge that plugged into the Intellivision's cartridge slot. It allowed you to write and run simple BASIC programs.

When writing a BASIC program, you could use PEEK and POKE commands to read and write directly to specific memory addresses. These commands were common in 8-bit computing and they are used to interact with the computer at a low level. 

Here's what those commands look like:

```
A = PEEK(ADDRESS)     ' Reads the byte at ADDRESS into variable A
POKE ADDRESS, VALUE   ' Writes VALUE into the byte at ADDRESS
```

The Intellivision hardware has a designated area in memory for the 8 hardware sprites (also known as Moving Graphic Objects or MGOs). Each sprite is defined by a 8x8 or 8x16 pixel bitmap.

For example, to draw a sprite on the Intellivision ECS, you would need to POKE the bitmap data to the video chip's memory, and then set the sprite's X and Y position, size, and color with further POKE commands. 

Here's an example of what that might look like:

```
POKE SPRITE_ADDRESS, BITMAP_DATA   ' Writes the bitmap data to the sprite's address
POKE SPRITE_X_ADDRESS, X           ' Sets the sprite's X position
POKE SPRITE_Y_ADDRESS, Y           ' Sets the sprite's Y position
POKE SPRITE_SIZE_ADDRESS, SIZE     ' Sets the sprite's size
POKE SPRITE_COLOR_ADDRESS, COLOR   ' Sets the sprite's color
```

Note that SPRITE_ADDRESS, SPRITE_X_ADDRESS, SPRITE_Y_ADDRESS, SPRITE_SIZE_ADDRESS, and SPRITE_COLOR_ADDRESS would need to be replaced with the actual addresses for these properties, and BITMAP_DATA, X, Y, SIZE, and COLOR would need to be replaced with the values you want to set.

Also, remember that this code will only work if the Intellivision's memory map is set up in a certain way, and different games may have different setups. Furthermore, accessing data from a cartridge requires the cartridge to be inserted and the system to be set up to read from the cartridge's memory address space.

On a final note, be aware that messing with the memory directly can be risky—if you write to a memory address that's used for something important, you can crash the system or cause other unexpected behavior. Always make sure you understand what you're doing before you start poking around in the memory.

In conclusion, ECS BASIC has limitations. It was designed for educational purposes and to demonstrate the potential of the ECS, rather than as a serious tool for game development. Many of the Intellivision's features are difficult or impossible to access from BASIC, which is one reason why commercial Intellivision games were written in assembly language rather than BASIC.

### Intellivision - a first "game" 

``` BASIC

10 PRINT "Sprite Collision Test"
20 PRINT "Loading Sprite..."
30 FOR I = 5000 TO 5015
40 POKE I, 255 ' Set sprite data
50 NEXT I
60 PRINT "Sprite Loaded."

70 PRINT "Starting Game..."
80 POKE 53248, 0 ' Set sprite 1 X position
90 POKE 53249, 0 ' Set sprite 1 Y position
100 POKE 53250, 5000 ' Set sprite 1 image data pointer

110 POKE 53252, 50 ' Set sprite 2 X position
120 POKE 53253, 50 ' Set sprite 2 Y position
130 POKE 53254, 5000 ' Set sprite 2 image data pointer

140 PRINT "Game Running."
150 GOSUB 1000 ' Check for collision

160 FOR I = 1 TO 100
170 POKE 53248, PEEK(53248) + 1 ' Move sprite 1 X position
180 GOSUB 1000 ' Check for collision
190 NEXT I

200 PRINT "Game Over."
210 END

1000 ' Collision Check
1010 IF PEEK(53264) AND 3 THEN PRINT "Collision Detected."
1020 RETURN
```

<br>

## ABC-80 

### Vanilla JavaScript 

Basic, was used but here is an example of Snake, in JavaScript: 

``` JavaScript
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
    if (head.left == parseInt(apple.style.left) && head.top == parseInt(apple.style.top)) {
        score += Math.round(100 / snake.length);
        scoreSpan.textContent = score;
        let appleLeft = Math.floor(Math.random() * 30) * 10;
        let appleTop = Math.floor(Math.random() * 30) * 10;
        apple.style.left = `${appleLeft}px`;
        apple.style.top = `${appleTop}px`;
    } else {
        snake.pop();
    }
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

let apple = createDot(0, 0, "apple", "apple");
gameBoard.appendChild(apple);

window.onload = () => {
    startScreen.style.display = "block";
}

```

### JavaScript using 2D-framework Phaser

``` JavaScript
import Phaser from 'phaser';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // Preload images or sprites here
        this.load.image('apple', 'assets/apple.png');
        this.load.image('snake', 'assets/snake.png');
    }

    create ()
    {
        // Create objects in the game world here
        this.apple = this.physics.add.staticGroup();
        this.snake = this.physics.add.sprite(100, 450, 'snake');

        // Place initial apple
        this.placeApple();

        // Check for collisions between the snake and the apples
        this.physics.add.collider(this.snake, this.apple, this.eatApple, null, this);
    }

    update ()
    {
        // Update game objects here, like moving the snake
    }

    placeApple ()
    {
        // Method for placing an apple at a random location
    }

    eatApple (snake, apple)
    {
        // Method for eating an apple and updating the score
        apple.disableBody(true, true);

        // Place a new apple
        this.placeApple();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [MyGame]
};

const game = new Phaser.Game(config);

``` 

### Alternatives to Phaser (for 2D games) 

There are numerous alternatives to Phaser for 2D game development in JavaScript. Here's a comparison table of a few alternatives:

| Framework       | Ease of Use  | Community | Documentation | Performance | Features |
|-----------------|--------------|-----------|---------------|-------------|----------|
| **Phaser**      | High         | Large     | Excellent     | High        | Extensive including physics, animation, sound, etc. |
| **Pixi.js**     | Medium-High  | Large     | Good          | High        | Primarily a rendering library. Need to implement game logic yourself or use additional libraries. |
| **CreateJS**    | Medium       | Medium    | Good          | High        | A suite of modular libraries that provide 2D content, sound, tweening, and interaction. |
| **MelonJS**     | Medium       | Small     | Good          | Medium      | Lightweight. Good for tile-based games. Includes physics and collision detection. |
| **Crafty.js**   | Medium       | Small     | Good          | Medium      | Component-based architecture. Good for smaller, simpler games. |
| **Konva.js**    | High         | Medium    | Good          | Medium      | More focused on 2D drawing and animations. Need to implement game logic yourself. |

1. **Ease of Use:** This indicates how beginner-friendly the framework is.
2. **Community:** A larger community often means more resources, tutorials, and third-party plugins available.
3. **Documentation:** Good documentation is crucial for learning the framework and troubleshooting issues.
4. **Performance:** This gives an idea of how efficiently the framework can render games, which can be important for more complex or resource-intensive games.
5. **Features:** This includes built-in capabilities like physics, animation, sound, tilemaps, etc. Some frameworks are more barebones and only handle rendering, leaving you to implement game mechanics yourself or use additional libraries.

Your choice of framework will depend on your needs and the type of game you're planning to create. Phaser is a robust and popular choice, but the others have their strengths as well. For example, Pixi.js is a great choice if you want a powerful, efficient rendering library and don't mind implementing game mechanics yourself or using additional libraries. On the other hand, if you're making a simple, small game, Crafty.js's component-based architecture could be a good fit.
## Atari 600 XL (1983)

The Atari 600XL, part of the Atari 8-bit family, was launched in 1983 as a low-end replacement for the Atari 400. It came with 16KB of RAM which could be expanded up to 64KB using Atari's 1064 memory module. It was equipped with a MOS Technology 6502B CPU, ANTIC and GTIA graphics chips, a POKEY sound chip, a ROM cartridge slot, and ports for various devices. It operated on the Atari 8-bit OS and Atari BASIC language was typically used for programming.

To develop a game for the Atari 600XL, one would write the game in Atari BASIC or Assembly, test it on an emulator or the actual hardware, and manipulate player/missile graphics in memory. To grasp the specifics of game development on the Atari 600XL, resources on Atari BASIC or Atari 600XL game development are recommended. To achieve success, understanding the hardware capabilities and mastering programming in Atari BASIC or Assembly are crucial, as is gradual progression from simple to complex projects. Active online Atari communities offer ample resources and support.

### A business application - a first "business application"

Not exactly right but close enough to create the "simplest" inventory program: 

``` BASIC 
10 PRINT "MENU"
20 PRINT "1. List Inventory"
30 PRINT "2. Edit Item"
40 PRINT "3. Delete Item"
50 PRINT "4. List All Items"
60 PRINT "5. Exit"
70 PRINT "Enter your choice:"
80 INPUT choice
90 IF choice=1 THEN GOTO 200
100 IF choice=2 THEN PRINT "Edit Item selected": GOTO 10
110 IF choice=3 THEN PRINT "Delete Item selected": GOTO 10
120 IF choice=4 THEN LIST: GOTO 10
130 IF choice=5 THEN END
140 GOTO 10

200 LIST 1010
210 LIST 1050
220 LIST 1100
...
230 GOTO 10

REM Inventory data
1010 REM 5
1050 REM 3
1100 REM 7
...
4000 REM 1
```

### Visual art on Atari 600 XL

A popular thing was to make simple visual art, including sound and visual effects, like side-scrolling texts: 

``` JavaScript

<!DOCTYPE html>
<html>
<head>
  <title>Atari Demo</title>
  <style>
    body {
      background-color: #000;  /* Set the background color to black */
      margin: 0;
      overflow: hidden;
    }

    canvas {
      border: 1px solid black;
      display: block;
    }

    /* Use a suitable fallback font for the letters */
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  </style>
</head>
<body>
  <canvas id="demoCanvas"></canvas>

  <script>
    // Get the canvas element
    const canvas = document.getElementById('demoCanvas');
    const context = canvas.getContext('2d');

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load sound files
    const sound = new Audio('8-bit-david-feslyan.mp3');
    sound.loop = true;

    // Define the letter class
    class Letter {
      constructor(x, y, letter) {
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.angle = 0;
      }

      update(sharedAngle) {
        this.angle += 0.05;  // Increase the angle increment for faster movement
        this.x -= 4;  // Adjust the value to control the scrolling speed from left to right

        // Reset the position of the letter to the left when it reaches the right edge
        if (this.x + (context.measureText(this.letter).width) < 0) {
          this.x = canvas.width;
        }

        // Calculate the vertical position based on the shared angle
        this.y = canvas.height / 2 + Math.sin(sharedAngle) * 100;
      }

      draw() {
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;  // Generate a random color
        context.font = '48px "VT323"';  // Use the fallback font here
        context.fillStyle = color;
        context.fillText(this.letter, this.x, this.y);
      }
    }

    // Create the letter objects
    const letters = [];
    const text = 'Atari XL';
    const letterSpacing = 60;  // Adjust the letter spacing based on the font size
    const yPosition = canvas.height / 2;
    let xPos = (canvas.width - (text.length * letterSpacing)) / 2;

    for (let i = 0; i < text.length; i++) {
      const letter = new Letter(xPos, yPosition, text[i]);
      letters.push(letter);
      xPos += letterSpacing;
    }

    // Animation loop
    function animate() {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate the shared angle for all the letters
      const sharedAngle = Date.now() * 0.002;  // Adjust the multiplier to control the speed of color change

      // Update and draw the letters
      for (const letter of letters) {
        letter.update(sharedAngle);
        letter.draw();
      }

      // Request the next animation frame
      requestAnimationFrame(animate);
    }

    // Set the initial shared angle to start at a random position
    const initialSharedAngle = Math.random() * Math.PI * 2;

    // Start the animation
    animate();

    // Play the sound loop
    sound.play();
  </script>
</body>
</html>
```

The code was usally written in Assembly language, this is a 6502 example: 

```assembly

; Set up memory locations
sound_loop = $8000    ; Sound loop address
canvas_width = $8100  ; Canvas width
canvas_height = $8102 ; Canvas height
canvas_ptr = $8104    ; Canvas address pointer
letter_xpos = $8106   ; Current letter x position
letter_ypos = $8108   ; Current letter y position

; Load sound loop address
LDA #<sound_loop
STA sound_loop
LDA #>sound_loop
STA sound_loop + 1

; Set canvas width and height
LDA #<canvas_width
STA canvas_width
LDA #>canvas_width
STA canvas_width + 1

LDA #<canvas_height
STA canvas_height
LDA #>canvas_height
STA canvas_height + 1

; Load canvas address
LDA #<demoCanvas
STA canvas_ptr
LDA #>demoCanvas
STA canvas_ptr + 1

; Initialize letter positions
LDA #<initial_xpos
STA letter_xpos
LDA #>initial_xpos
STA letter_xpos + 1

LDA #<initial_ypos
STA letter_ypos
LDA #>initial_ypos
STA letter_ypos + 1

; Initialize sound loop
LDA #$00
STA $D401  ; Set initial volume
LDA #$0C
STA $D418  ; Set initial frequency
LDA #$10
STA $D41A  ; Set initial waveform

; Start animation loop
loop:
  ; Clear the canvas
  LDA #$00
  STA $D800, X
  STA $D900, X

  ; Update letter position
  LDA letter_xpos
  ADC #<letter_speed
  STA letter_xpos
  LDA letter_xpos + 1
  ADC #>letter_speed
  STA letter_xpos + 1

  ; Update letter color
  LDA #$00
  STA $D800, X
  STA $D900, X
  STA $D901, X
  LDA #<random_color
  STA $D900, X
  LDA #>random_color
  STA $D901, X

  ; Draw the letter
  LDA letter_xpos
  STA $D800, X
  LDA letter_xpos + 1
  STA $D900, X

  ; Check for loop end condition
  LDA letter_xpos
  CMP #<loop_end
  BNE loop

  LDA letter_xpos + 1
  CMP #>loop_end
  BNE loop

  ; Restart loop
  JMP loop

; Data section
initial_xpos: .word 100
initial_ypos: .word 200
letter_speed: .word 2
random_color: .word $C0DE
loop_end: .word $FFFF

; Rest of the code...

```



