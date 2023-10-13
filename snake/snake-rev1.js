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
