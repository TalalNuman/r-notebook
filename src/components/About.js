import React, { useContext, useEffect } from "react";
import notecontext from "../context/notes/NoteContext";
export default function About() {
  const a = useContext(notecontext);

  useEffect(() => {
    a.update();
    //  eslint-disable-next-line
  }, []);

  return (
    <div className="text-4xl font-bold text-red-500">
      This is About {a.state.name} <br />
      Who is in class {a.state.class}
    </div>
  );
}
