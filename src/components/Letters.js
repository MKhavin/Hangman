import Letter from "./Letter";
import "../css/Letters.css"

function Letters(props) {
  return (
    <div className="letters-container">
      <div>Available letters</div>
      <div className="letters-buttons-container">
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
    </div>
  );
}

export default Letters;
