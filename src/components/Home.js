import React, { useState } from "react";
// import NoteContext from "../context/notes/NoteContext";
import Note from "./Note"
export default function Home() {
  const [title, setTitle] = useState("title...");
  const [tag, setTag] = useState("title...");
  const [description, setDescription] = useState("description.....");
  const onClickButton = (event)=> {
    event.preventDefault();
  }
  
  const print = ()=>{
      console.log(title)
      console.log(description)
      console.log(tag)
  }

  return (
    <div className="my-3 ">
      <h1 className="text-3xl text-center font-semibold "> Add a Note</h1>
      <div className="flex justify-center">
        <form
            onClick={onClickButton}
          className="flex flex-col bg-white rounded shadow-lg w-3/5 p-12 mt-12"
          action=""
        >
          <label className="font-semibold text-xs" htmlFor="usernameField">
            Title
          </label>
          <input
            className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
            name="title"
            onChange={e=> setTitle(e.target.value)}
/>
          <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
            Description
          </label>
          <textarea
            className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
            name="description"
            onChange={e=> setDescription(e.target.value)}
          />
          <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
            Tag
          </label>
          <input
            className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
            name="tag"
            onChange={e=> setTag(e.target.value)}
          />
          <button onClick={print} className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
            Login 
          </button>
         
        </form>

      </div>
            <div className="">
                <h1 className="text-2xl font-bold"> Your Notes </h1>
                <Note/>
            </div>

    </div>
  );
}
