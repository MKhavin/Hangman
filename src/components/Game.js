import Score from "./Score";
import Solution from "./Solution";
import Letters from "./Letters";
import { useState } from "react";

function Game(props) {
    let [letters, setLetterStatus] = useState(generateLetterStatuses());

    function getAndUpdateScore(currentLetter) {
        let currentScore = props.score

        if (props.solution.word.includes(currentLetter)) {
            currentScore += 5;
        } else {
            currentScore -= 20;
        }

        props.setScore(currentScore);

        return currentScore
    }

    function updateScoreAndLettersStatus(lettersInfo) {
        const currentScore = getAndUpdateScore(lettersInfo.currentLetter);
        setLetterStatus(lettersInfo.letters);

        checkEndGame(currentScore, lettersInfo.letters);
    }

    function checkEndGame(currentScore, currentLetters) {
        if (currentScore <= 0) {
            props.setGameState("GameOver");
        }

        for (let letter of props.solution.word) {
            if (!currentLetters[letter]) {
                return;
            }
        }

        props.setGameState("GameOver");
    }

    function generateLetterStatuses() {
        let letterStatus = {};
        for (let i = 65; i < 91; i++) {
            letterStatus[String.fromCharCode(i)] = false;
        }

        return letterStatus;
    }

    return <div>
        <Score value={props.score} />
        <Solution solution={props.solution} letters={letters} />
        <Letters
            letters={letters}
            letterClicked={updateScoreAndLettersStatus}
        />
    </div>
}

export default Game