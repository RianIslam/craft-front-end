import React from "react";
import { Note } from "../models/note.model";

interface Props {
  notes: Note[];
}

const NotesList = ({ notes }: Props) => {
  return (
    <div>
      <h2 className="mt-3">Notes</h2>
      <div>{render}</div>
    </div>
  );
};

export default NotesList;
