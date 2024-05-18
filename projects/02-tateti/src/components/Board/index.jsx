import { useState } from "react";
import Square from "./Square";

const TURNS = { x: "X", o: "O" };

const updateBoard = (index) => {
  if (currentTurn == TURNS.x) {
    setTurn(TURNS.o);
  } else {
    setTurn(TURNS.x);dsds
  }
};esto esta en el stash 

const Board = () => {
  const [currentTurn, setTurn] = useState(TURNS.x);
  const board = Array(9).fill(false);

  return (
    <main>
      <section className="tateti-board_game">
        {board.map((index) => (
          <Square
            key={index}
            index={index}
            board={board}
            currentTurn={currentTurn}
            updateBoardFundtion={updateBoard}
          >
            [board[index]]
          </Square>
        ))}
      </section>
      <section className="tateti-turns">
        <Square currentTurn={currentTurn}>{TURNS.x}</Square>
        <Square currentTurn={currentTurn}>{TURNS.o}</Square>
      </section>
    </main>
  );
};

export default Board;
