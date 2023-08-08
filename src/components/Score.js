function Score(props) {
  function getScoreColor() {
    if (props.value >= 90) {
      return "high-score";
    } else if (props.value >= 50) {
      return "medium-score";
    } else {
      return "low-score";
    }
  }

  return <div className={getScoreColor()}>{props.value}</div>;
}

export default Score;
