import React, { useContext } from "react";
import notecontext from "../context/notes/NoteContext";
import NoteCard from "./NoteCard";

export default function Note() {
  const context = useContext(notecontext);
  const { notes, setNotes } = context;
  return (
    <div className="container mx-auto grid md:grid-cols-3 gap-2 mt-10">
      {notes.map((note) => {
        return <NoteCard note={note} />;
      })}
    </div>
  );
}
