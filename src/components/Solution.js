import Letter from "./Letter";

function Solution(props) {
  return (
    <div>
      {props.solution.word.split("").map(value => (<Letter text={props.letters[value] ? value : "_ "} key={value} />))}
      <div>
        <em>{props.solution.hint}</em>
      </div>
    </div>
  );
}

export default Solution;
