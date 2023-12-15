import React from "react";

export default function Joke(props) {
  console.log(props);
  return (
    <div>
      {/*JS mode - if props.setup exists, then it shows */}
      {props.setup && <h3>{props.setup}</h3>}
      <h4>{props.punchline}</h4>
      <hr />
    </div>
  );
}
