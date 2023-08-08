import "../css/EndGame.css"

function EndGame(props) {
    return <div className="end-game-container">
        <p>{props.endGameText}</p>
    </div>
}

export default EndGame