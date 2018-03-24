import React from 'react';

const init = ({ init }) => (<button onClick={ () => init() }>Play</button>);

const action = (props) => (
  <div id="player">
    <div id="player-cards">cards</div>
    <div id="player-options">
      <button>Hit</button>
      <button>Double</button>
      <button>Stand</button>
      <button>Split</button>
    </div>
  </div>
);

const Player = (props) => (
  props.cards.length ? action(props) : init(props)
);

export default Player;