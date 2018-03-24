import React from 'react';

const init = (fn) => (<button onClick={ () => fn() }>Play</button>);

const action = () => (
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
  props.cards.length ? action() : init(props.init)
);

export default Player;