import React from 'react';
import Player from './Player';
import Dealer from './Dealer';
import '../styles/table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {
        cards: []
      },
      dealer: {
        cards: []
      }
    };
  }

  handleAction(action) {
    alert(action);
  }

  init() {
    alert('hi')
  }

  render() {
    return(
      <div id="table">
        <Dealer cards={ this.state.dealer.cards } />
        <Player cards={ this.state.player.cards } onAction={ this.handleAction } init={ this.init } />

      </div>
    )
  }
}

export default Table;