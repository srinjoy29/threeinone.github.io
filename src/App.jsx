

// export default App;
import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Containers from "./Containers.jsx";
import Note from "./Note";
import FixedNote from "./FixedNote"



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== id);
    });
  }

  return (
    <div>
    <Header />
    <FixedNote /> 
   
    <Containers onAdd={addNote} />
    {notes.map((noteItem, index) => {
      return (
        <Note
          key={index}
          id={index}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      );
    })}
    <Footer />
  </div>
  
  );
}

export default App;