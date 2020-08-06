new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = []
    },
    attack: function () {
        let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage
      this.turns.unshift({
          isPlayer: true,
          text: 'Player hits Monster for ' + damage
      })
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks()
    },
    specialAttack: function () {
        let damage = this.calculateDamage(10, 20);
        this.monsterHealth -= damage
        this.turns.unshift({
            isPlayer: true,
            text: 'Player hits Monster hard for ' + damage
        })
        if (this.checkWin()) {
          return;
        }
        this.monsterAttacks()
    },
    heal: function () {
        if (this.playerHealth <= 90) {
            this.playerHealth += 10
        } else {
            this.playerHealth = 100
        }
        this.turns.unshift({
            isPlayer: true,
            text: 'Player heals for 10'
        })
        this.monsterAttacks()
    },
    giveUp: function () {
        this.gameIsRunning = false
    },
    monsterAttacks: function () {
        let damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
    })
      this.checkWin();
    },
    calculateDamage: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You win! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lose! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});

// Math.floor(Math.random()*(max-min+1)+min);

// The solution turned out to be pretty straightforward. 
// Somewhere along the way we missed to stop adding logs 
// after we've lost the game and continue adding the logs. 
// The solution is to replace this code:
// this.checkWin();
// with this:
//      if (this.checkWin()){
//          return;
//      }

