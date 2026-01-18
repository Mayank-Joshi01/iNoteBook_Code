import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext';

function Noteitem(props) {
  const context = useContext(noteContext);

  const { deleteNote } = context

  const { note, updateNote } = props
  return (<div>
    <div className="card noteitmcontainer" style={{ width: "18rem", display: "inline-block", margin: "10px 0px" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <div className="note-icons">
          <i className="fa-solid fa-trash-can " onClick={() => { deleteNote(note._id); props.Showalert(" Note Deleted Sucessfulllly", "danger") }}></i>
          <i className="fa-solid fa-pen-to-square" onClick={() => { updateNote(note) }}></i>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Noteitem