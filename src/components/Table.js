import React from 'react';
import Player from './Player';
import Dealer from './Dealer';
import Blackjack from '../lib/Blackjack';
import '../styles/table.css';


class Table extends React.Component {
  constructor(props) {
    super(props);

    this.game = new Blackjack();

    this.state = {
      player: {
        cards: [],
        canSplit: null,
        canDouble: null,
        canHit: null,
        hardCount: 0,
        softCount: 0
      },
      dealer: {
        cards: []
      },
      isDealerTurn: false
    };
  }

  handleAction(action) {
    alert(action);
  }

  init() {
    // Player sits down at table
    this.game.deal();

    let player = Object.assign({}, this.state.player);
    player.cards = this.game.getPlayerCards();
    player.canSplit = this.game.canPlayerSplit();
    player.canDouble = this.game.canPlayerDouble();
    player.canHit = this.game.canPlayerHit();
    player.hardCount = this.game.getPlayerHardCount();
    player.softCount = this.game.getPlayerSoftCount();

    this.setState({ player });
  }

  render() {
    return(
      <div id="table">
        <Dealer dealer={ this.state.dealer } />
        <Player player={ this.state.player } onAction={ this.handleAction } init={ () => this.init() } />

      </div>
    )
  }
}

export default Table;