import Letter from "./Letter";
import "../css/Solution.css"

function Solution(props) {
  return (
    <>
      <div class="answer-container">
        {props.solution.word.split("").map(value => (<Letter text={props.letters[value] ? value : "_"} key={value} />))}
      </div>
      <em class="hint">Hint: {props.solution.hint}</em>
    </>
  );
}

export default Solution;
