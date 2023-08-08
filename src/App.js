import { useState } from "react";
import "./css/App.css";
import EndGame from "./components/EndGame";
import StartGame from "./components/StartGame";
import Game from "./components/Game";

function App() {
  let [score, setScore] = useState(100);
  let [solution, setSolution] = useState({
    word: "CALM",
    hint: "Your ideal mood when coding",
  });

  function getCurrentPage() {
    switch (gameState) {
      case "Start":
        return <StartGame setGameState={setGameState} />;
      case "GameOver":
        return (
          <EndGame
            endGameText={
              score <= 0
                ? `Game Over ! Correct word: ${solution.word}`
                : "Congratulations !"
            }
          />
        );
      default:
        return (
          <Game
            score={score}
            setScore={setScore}
            setGameState={setGameState}
            solution={solution}
          />
        );
    }
  }

  let [gameState, setGameState] = useState("Start");

  return <div className="App">{getCurrentPage()}</div>;
}

export default App;
