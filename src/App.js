import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😀": "Smiling",
  "🤮": "Vomiting",
  "😪": "Sleepy",
  "🥱": "Yawning"
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    //console.log(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this in our bucket";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emoji We Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
