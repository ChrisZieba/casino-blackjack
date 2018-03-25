import React from 'react';

const init = ({ init }) => (<button onClick={ () => init() }>Play</button>);

const action = (props) => (

  <div id="player">
    <div id="player-cards">
      { props.player.cards.map((card, index) => {
        return (<div key={index}>{card.value} {card.rank}</div>)
      })}
    </div>

    <div id="player-options">
      <button onClick={ () => props.action('hit') }>Hit</button>
      { props.player.canDouble && <button onClick={ () => props.action('double') }>Double</button> }
      <button onClick={ () => props.action('stand') }>Stand</button>
      { props.player.canSplit && <button onClick={ () => props.action('split') }>Split</button> }
    </div>
  </div>
);

const Player = (props) => (
  props.player.cards.length ? action(props) : init(props)
);

export default Player;