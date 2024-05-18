import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Square = ({ children, isSelected, updateBoardFunction, index }) => {
  const className = `square ${isSelected ? "isSelected" : ""}`;

  return (
    <div
      onClick={() => {
        updateBoardFunction(index);
      }}
      className={className}
    >
      {children}
    </div>
  );
};

function App() {
  const TURNS = {
    x: "X",
    o: "O",
  };
  const initialBoard = Array(9).fill(null);
  const [turn, setTurn] = useState(TURNS.x);

  const [board, setBoard] = useState(initialBoard);

  const updateBoard = (index) => {
    console.log("holas" + index);
    const newBoard = [...board];
    newBoard[index] = turn;
    const newTurn = TURNS.x == turn ? TURNS.o : TURNS.x;

    setTurn(newTurn);
    setBoard(newBoard);

    /// pintar el contenido del square como el turno
  };

  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <main className="board">
        <section className="game">
          {board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoardFunction={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })}
        </section>

        <section className="turn">
          <Square isSelected={turn == TURNS.x}>{TURNS.x}</Square>
          <Square isSelected={turn == TURNS.o}>{TURNS.o}</Square>
        </section>
      </main>
    </>
  );
}

export default App;
