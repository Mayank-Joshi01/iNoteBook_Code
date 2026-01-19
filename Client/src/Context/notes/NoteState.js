import noteContext from "./NoteContext";
import { useState,useEffect, use} from "react";

const NoteState = (props) => {

  const host = process.env.REACT_APP_Backend_Base_URL || "http://localhost:8001/api/notes"

  const initialNotes = []
  const [notes, setnotes] = useState(initialNotes)
  const [noteLength, setnoteLength] = useState(0)
  const [user, setuser] = useState(null)


useEffect(() => {
  if(localStorage.getItem("token")){
  allNotes();
  getUserdata();
}
}, [localStorage.getItem("token")])


  // Get all notes 
  const allNotes = async () => {
    const url = `${host}/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "user-token": localStorage.getItem("token")
      }
    });

    const json = await response.json();
    setnotes(json);
    setnoteLength(json.length);
  }



  /// Add a Note

  const addNote = async (title, description, tag) => {
    //TODO : API Call
    const url = `${host}/addnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "user-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag }),

    });

    const json = await response.json();

    const note = { ...json, ...{ title, description, tag } }
    setnotes(notes.concat(note))

  }

  /// Delete a Note
  const deleteNote = async (id) => {
    // TODO : API Call
    const url = `${host}/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "user-token": localStorage.getItem("token")
      },
    });
    const newNote = notes.filter((note) => { return note._id !== id })
    setnotes(newNote)
  }


  /// Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const url = `${host}/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "user-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag }),

    });


    //Logic to edit Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index]
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag
        break;
      }
    }
    let newNote = JSON.parse(JSON.stringify(notes))
    setnotes(newNote)
  }

// Getting User Data
const getUserdata = async ()=>{
  const url = `${process.env.REACT_APP_Backend_Base_URL || "http://localhost:8001/api"}/auth/getuser`
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "user-token":localStorage.getItem("token")
    },
  });
  const json = await response.json();
  setuser({json})


}

  return (
    <noteContext.Provider value={{ notes, noteLength, setnotes, addNote,getUserdata, deleteNote, editNote, allNotes ,user}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState