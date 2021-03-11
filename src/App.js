import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😀": "Smiling",
  "🤮": "Vomiting",
  "😪": "Sleepy",
  "🥱": "Yawning"
};
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
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
    </div>
  );
}
