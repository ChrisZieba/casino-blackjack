class Blackjack {
  constructor() {
    this.decks = 2;
    this.shoe = [];

    this.player = {
      cards: []
    };

    this.dealer = {
      cards: []
    };
  }

  _rand() {
    let i = this.shoe.length;

    while (--i) {
      let j = Math.random() * (i + 1) | 0;
      [this.shoe[i], this.shoe[j]] = [this.shoe[j], this.shoe[i]];
    }
  }

  _shuffle() {
    this.shoe = [];
    const suits = ['♥', '♦', '♠', '♣'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    // Create the shoe using the decks setting
    for (let i = 0; i < this.decks; i+=1) {
      for (let j = 0; j < suits.length; j+=1) {
        for (let k = 0; k < ranks.length; k+=1) {
          this.shoe.push({ rank: ranks[k], suit: suits[j] });
        }
      }
    }

    this._rand();
  }

  deal() {
    console.log('deal');
    this._shuffle();

    // Give the player 2 cards
    this.player.cards = [this.shoe.pop(), this.shoe.pop()];

    // Give one card to the dealer
    this.dealer.cards = [this.shoe.pop()];
  }

  getPlayerCards() {
    return this.player.cards;
  }

  getDealerCards() {
    return this.dealer.cards();
  }
}

export default Blackjack;