import react, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
 const notesInitial =[ {
    "_id": "6185ade7e64845d8f0708deb",
    "user": "618599597897274945caef0f",
    "title": "Second Book",
    "description": "This is my 4rd book",
    "tag": "personal",
    "date": "2021-11-05T22:19:19.431Z",
    "__v": 0
  },
  {
    "_id": "618684f78ddecff027f49587",
    "user": "618599597897274945caef0f",
    "title": "Second ok",
    "description": "Code daily and conquer",
    "tag": "Google",
    "date": "2021-11-06T13:36:55.640Z",
    "__v": 0
  }]
  const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes , setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
