import { useState } from "react";

const TURNS = {
  X: "❌",
  O: "⚪",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () =>{
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log("board::: ", board);

  const [turn, setTurn] = useState(TURNS.X);
  // null es que no hay ganador, false es que hay empate y true es que hay ganador
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    //revisamos las combos ganadores
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 -> hay una x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c] 
      ) {
        return boardToCheck[a]
      }
    }

    //si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    // No se actualiza si tiene algo
    if (board[index] || winner) return
    // si no tiene algo actualiza
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    // cambiar el turno 
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
      // alert(`El ganador es ${newWinner}`)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  };

  return (
    <main className="board">
      <h1>tiquitaka</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Ganó:'
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  );
}

export default App;
