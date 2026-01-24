import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../Context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'

function Notes(props) {
  let navigate = useNavigate();
  let context = useContext(noteContext);

  const { notes, allNotes, editNote } = context

  const [enote, setenote] = useState({ title: "", description: "", tag: "" })

  useEffect(() => {
    if (localStorage.getItem("token")) {
      allNotes();
    }
    else {
      navigate('/login/')
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)

  const updateNote = (note) => {
    ref.current.click();
    setenote(note)

  }

  const handelNote = (e) => {
    ref.current.click();
    editNote(enote._id, enote.title, enote.description, enote.tag)
    props.Showalert("Note Edited Sucsessfullly", "success")
    e.preventDefault();
  }

  const handelOnchange = (e) => {
    setenote({ ...enote, [e.target.name]: e.target.value })
  }
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                  <input type="text" onChange={handelOnchange} name="title" value={enote.title} className="form-control" id="title" placeholder="Title" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                  <textarea className="form-control" onChange={handelOnchange} value={enote.description} name='description' id="description" placeholder="Description" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                  <input type="Tag" onChange={handelOnchange} name="tag" value={enote.tag} className="form-control" id="title" placeholder="Tag" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={enote.title.length < 5 || enote.description.length < 10} className="btn btn-primary" onClick={handelNote}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <AddNote Showalert={props.Showalert} />
      <h1 className='my-3'>Your notes</h1>

      {notes.length === 0 &&
        <h6>
          No Notes to show
        </h6>
      }

      <div className='noteitmcontainer'>

        {(notes.lenght !== 0) && notes.map((note) => {
          return <Noteitem note={note} updateNote={updateNote} key={note._id} Showalert={props.Showalert} />
        })}
      </div>
    </div>
  )
}

export default Notes