import React from "react";
import { Joke } from "./joke";
import { jokesData } from "./jokeData";

export const Display = () => {
  const jokeElements = jokesData.map((joke) => (
    <Joke setup={joke.setup} punchline={joke.punchline} />
  ));

  return <div className="joke-container">{jokeElements}</div>;
};

// <Joke
//   setup="I got my daughter a fridge for her birthday."
//   punchline="I can't wait to see her face light up when she opens it."
//   isPun={false}
// />
// <Joke
//   setup="How did the hacker escape the police?"
//   punchline="He just ransomware!"
//   upvotes={3}
//   downvotes={5}
//   comments={[`nice one`, `terrible joke`]}
//   isPun={true}
// />
// <Joke
//   setup=" Why don't pirates travel on mountain roads?"
//   punchline="Scurvy."
//   isPun={true}
// />
// <Joke
//   setup="Why do bees stay in the hive in the winter?"
//   punchline="Swarm."
//   isPun={true}
// />
// <Joke
//   setup="What's the best thing about Switzerland?"
//   punchline="I don't know, but the flag is a big plus!"
//   isPun={false}
// />
// <Joke
//   punchline="It’s hard to explain puns to kleptomaniacs because they  always take things literally."
//   isPun={false}
// />
