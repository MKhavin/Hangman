function Letter(props) {
    function letterClicked() {
        if (props.letters[props.text]) {
            return
        }

        const newLetters = structuredClone(props.letters)
        newLetters[props.text] = true

        props.letterClicked({
            letters: newLetters,
            currentLetter: props.text
        })
    }

    return <span
        className={props.class ? Object.values(props.class).reduce((prevValue, value) => prevValue + " " + value, "") : ""}
        onClick={letterClicked}>{props.text}</span>
}

export default Letter