import React from 'react';
import Player from './Player';
import Dealer from './Dealer';
import '../styles/table.css';

const Table = () => (
  <div id="table">
    <Dealer />
    <Player />

  </div>
);

export default Table;