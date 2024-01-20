import React, { useState } from 'react';
import Tile from './Tile';
import Cell from './Cell';
import { Board } from '../../helper';

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  return <div>{JOSN.stringify(board)}</div>;
}


export default Board