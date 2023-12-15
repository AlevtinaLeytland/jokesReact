import React from "react";
import Joke from "./Joke.js";
import jokesData from "./jokesData.js";

export default function App() {
  console.log(jokesData);
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
