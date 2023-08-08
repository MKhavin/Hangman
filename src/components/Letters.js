import Letter from "./Letter";

function Letters(props) {
  return (
    <div>
      <div>Available letters</div>
      {Object.keys(props.letters).map((letter) => (
        <Letter
          key={letter}
          text={letter}
          class={{
            selected: props.letters[letter] ? "letter-selected" : "",
            button: "letter-button"
          }}
          letterClicked={props.letterClicked}
          letters={props.letters}
        />
      ))}
    </div>
  );
}

export default Letters;
