import React from "react";
import './Note.css'

function Note(props) {  //function argument
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">  
      <h1>{props.title}</h1>    {/*props object */}
      <p>{props.desc}</p>
      <button onClick={handleClick}>Delete Note</button>
    </div>
  );
}

export default Note;
