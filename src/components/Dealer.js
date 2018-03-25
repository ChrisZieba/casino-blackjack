import React from 'react';

const Dealer = (props) => (
  <div id="dealer-cards">
    { props.dealer.cards.map((card, index) => {
      return (<div key={index}>{card.value} {card.rank}</div>)
    })}
  </div>
);

export default Dealer;