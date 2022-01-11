import React, { useState } from "react";
import "./App.css";
import { Note } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "some some",
      color: "#ff5667",
      date: new Date().toString(),
    },
  ]);

  return <div className="App">Hello</div>;
}

export default App;
