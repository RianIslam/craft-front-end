import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
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

  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col>
            <NotesList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
