
// Map information, tile information
var tile_width = 101;
var tile_height = 83;

var left_edge = 0;
var right_edge = 500;

var up_edge = 83;
var down_edge = 500;


// Initialize player start position
var PLAYER_START = {x:200, y:400};


// helper function
function randomSpeed(min, max) {
    // output a random speed, range(min, max)
    return Math.floor(Math.random()*(max - min + 1) + min);
}


// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = randomSpeed(60, 300);
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
        this.speed = randomSpeed(60, 300);
        this.x = Math.floor(-Math.random() * 100 - 300);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//enemy left and right edge
Enemy.prototype.left = function() {
    var enemy_left = this.x;
    return enemy_left;
};

Enemy.prototype.right = function() {
    var enemy_right = this.x + 100;
    return enemy_right;
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

//player left and right edge
Player.prototype.left = function() {
    var player_left = this.x + 35;
    return player_left;
};

Player.prototype.right = function() {
    var player_right = this.x + 70;
    return player_right;
};

// Player should avoid touch the bugs
Player.prototype.update = function() {
    // collision detection, player return to starting point
    for (var i=0; i<allEnemies.length; i++) {
        if(allEnemies[i].right() >= this.left() &&
            allEnemies[i].left() <= this.right() &&
            this.y <= allEnemies[i].y+40 &&
            allEnemies[i].y <= this.y+30) {
            this.reset();
        }
    }
};

Player.prototype.reset = function() {
    this.x = PLAYER_START.x
    this.y = PLAYER_START.y
}

// Use keyboard arrows to move the player. Player cannot move out of map.
Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'up':
            if(this.y > up_edge) {
                this.y = this.y - tile_height;
            }
            else this.reset();
            break;
        case 'down':
            if(this.y < down_edge - 2*tile_height) {
                this.y = this.y + tile_height;
            }
            break;
        case 'left':
            if(this.x > left_edge) {
                this.x = this.x - tile_width;
            }
            break;
        case 'right':
            if (this.x < right_edge - tile_width) {
                this.x = this.x + tile_width;
            }
            break;
        default:
            return;
    }    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
    new Enemy(-100, 68),
    new Enemy(-100, 151),
    new Enemy(-100, 234),
    new Enemy(-200, 68),
    new Enemy(-300, 151),
    new Enemy(-300, 234)
];

var player = new Player(PLAYER_START.x, PLAYER_START.y);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
