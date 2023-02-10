import React from "react";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";
import Box from "./components/Box/Box";
import Footer from "./components/Footer/Footer";
import { useState } from "react";   //importing use state

function App() {
  const [doc, setdoc] = useState([]);   //setting intial state and a function that updates states
  function addNote(newNote) {
    setdoc((olddoc) => {
      return [...olddoc, newNote];
    });
  }
  function deleteNote(id) {
    setdoc((olddoc) => {
      return olddoc.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <Box onAdd={addNote} />
      {doc.map((noteItem, index) => {
        return (
          <Note key={index} id={index} title={noteItem.title} desc={noteItem.desc} onDelete={deleteNote}/>
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
