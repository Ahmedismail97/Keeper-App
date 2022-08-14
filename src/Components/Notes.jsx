import React, { useState } from "react";
import Note from "./Note";
import CreatNote from "./CreateNote";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <CreatNote onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default Notes;
