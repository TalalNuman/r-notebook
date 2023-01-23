import React from "react";

export default function NoteCard(props) {
  const { note } = props;
  return (
    <div>
      <div class=" py-4 px-8 bg-green-100 shadow-lg rounded-lg my-10">
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">{note.title}</h2>
          <p class="mt-2 text-gray-600">{note.description}</p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#/" class="text-xl font-medium text-indigo-500">
            John Doe
          </a>
        </div>
      </div>
    </div>
  );
}
