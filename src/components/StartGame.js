import "../css/StartGame.css"
import "../css/App.css"

function StartGame(props) {
    function startGame() {
        props.setGameState("Play")
    }

    return <div class="start-game">
        <h1 className="title">Hangman</h1>
        <button onClick={startGame} className="game-button">Start Game</button>
    </div>
}

export default StartGame