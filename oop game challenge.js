function Player(name){
this.name= name,
this.gold= 0,
this.lvl = 1
}


Player.prototype.gainXP = function (xp) {
    this.gold += xp;

    if  (this.gold >= 10){
        this.lvl++;
        this.gold -= 10;
    }
}

Player.prototype.describe = function () {
    return `${this.name} is a raid boss this level ${this.lvl} with ${this.gold} amount of gold`; 
}


const player1 = new Player('Ciege');
const player2 = new Player('Alex');




player1.gainXP(7);
player1.gainXP(6);
player2.gainXP(3);
player1.gainXP(6);
player1.gainXP(6);
player2.gainXP(7);
player1.gainXP(6);
player1.gainXP(5);
player1.gainXP(6);
player2.gainXP(6);


console.log(player1.describe());
console.log(player2.describe());