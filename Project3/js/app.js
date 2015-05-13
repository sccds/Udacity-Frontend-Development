
// Map information, tile information
var TILE_WIDTH = 101;
var TILE_HEIGHT = 83;

var LEFT_EDGE = 0;
var RIGHT_EDGE = 500;

var UP_EDGE = 83;
var DOWN_EDGE = 500;

var ROW = [68, 151, 234];

// Initialize player start position
var PLAYER_START = {x:200, y:400};


// helper function
function randomNumber(min, max) {
    // Output a random speed, range(min, max)
    return Math.floor(Math.random()*(max - min + 1) + min);
}


// Enemies class, include update(), render() method.
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = randomNumber(60, 300);
    this.width = 80;
    this.height = 30;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < ctx.canvas.width){    // bugs in the canvas:
        this.x += this.speed * dt;
    }
    else { // bugs go out of canvas, 
        this.speed = randomNumber(60, 300);
        this.x = Math.floor(-Math.random() * 100 - 300);
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Player class, include update(), render() and a handleInput() method

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 30;
};


// Player should avoid touch the bugs. Collision detection
Player.prototype.update = function() {
    // Condition: 1. bug_left touch player_right
    //            2. bug_right touch player_left
    //            3. bug_top touch player_bottom
    //            4. bug_bottom touch player_top
    for (var i=0; i<allEnemies.length; i++) {
        if(allEnemies[i].x <= this.x + this.width &&
            allEnemies[i].x + allEnemies[i].width >= this.x &&
            allEnemies[i].y + allEnemies[i].height >= this.y &&
            allEnemies[i].y <= this.y + this.height) {
            this.reset();
        }
    }
};

// Reset Player to init position
Player.prototype.reset = function() {
    this.x = PLAYER_START.x;
    this.y = PLAYER_START.y;
}


// Use keyboard arrows to move the player. Player cannot move out of map.
Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'up':
            if(this.y > UP_EDGE) {
                this.y = this.y - TILE_HEIGHT;
            }
            else this.reset();
            break;
        case 'down':
            if(this.y < DOWN_EDGE - 2*TILE_HEIGHT) {
                this.y = this.y + TILE_HEIGHT;
            }
            break;
        case 'left':
            if(this.x > LEFT_EDGE) {
                this.x = this.x - TILE_WIDTH;
            }
            break;
        case 'right':
            if (this.x < RIGHT_EDGE - TILE_WIDTH) {
                this.x = this.x + TILE_WIDTH;
            }
            break;
        default:
            return;
    }    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Generate Enemies
var allEnemies = [];
for (var i = 0; i < 6; i++) {   
        var randX = randomNumber(-300, -100);
        var randY = ROW[Math.floor(Math.random() * ROW.length + 1) - 1];
        var newEnemy = new Enemy(randX, randY); 
        allEnemies.push(newEnemy);
}

// Generate Player starting at init position
var player = new Player(PLAYER_START.x, PLAYER_START.y);

// Listen for key presses and sends the keys to Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
