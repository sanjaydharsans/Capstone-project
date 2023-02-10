import React from "react";
import { useState } from "react";
import './Box.css'

function Box(props) {    // function component
  const [notes, setNotes] = useState({
    title: "",
    desc: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((oldNotes) => {
      return {
        ...oldNotes,
        [name]: value
      };
    });
  }
  function submit(event) {
    props.onAdd(notes);
    setNotes({
      title: "",
      desc: ""
    });
    event.preventDefault();
  }
  return (
    <div className="tile">
      <form>
        <input name="title" id='ab' onChange={handleChange} value={notes.title} placeholder="Title" />      {/*calling event */}
        <textarea name="desc" id='ab' value={notes.desc} onChange={handleChange} placeholder="Description" rows="4"/>
        <button onClick={submit}>Add Note</button>
      </form>
    </div>
  );
}

export default Box;
