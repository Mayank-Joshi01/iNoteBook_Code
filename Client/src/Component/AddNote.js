import React,{useContext,useState} from 'react'
import noteContext from '../Context/notes/NoteContext';

function AddNote(props) {
    let context = useContext(noteContext);
    const {addNote} = context

    const [note, setNote] = useState({title:"",description:"",tag:""})

    const handelClick = (e)=>{
        e.preventDefault();
addNote(note.title , note.description, note.tag);
props.Showalert("Note added Successfully","success")
setNote({title:"",description:"",tag:""})
    }

    const handelOnchange = (e)=>{
setNote({...note,[e.target.name] : e.target.value})
    }

  return (
    <div classNAme="m-t30">
    <h1>Add a Note</h1>
<form action="">
        <div  className="mb-3">
            <label htmlFor="exampleFormControlInput1"  className="form-label">Title</label>
            <input type="Title" onChange={handelOnchange}value={note.title} name="title" className="form-control" id="title" placeholder="Title" />
        </div>
        <div  className="mb-3">
            <label htmlFor="exampleFormControlTextarea1"  className="form-label">Description</label>
            <textarea  type ="Description" className="form-control" value={note.description} name='description' id="description" placeholder="Description" rows="3" onChange={handelOnchange} ></textarea>
        </div>
        <div  className="mb-3">
            <label htmlFor="exampleFormControlInput2"  className="form-label">Tag</label>
            <input type="Tag" onChange={handelOnchange} name="tag" value={note.tag} className="form-control" id="tag" placeholder="Tag" />
        </div>
        <button type="submit" disabled={note.title.length<5 || note.description.length<10}  className="btn btn-success" onClick={handelClick}>Add Note</button>
        </form>
    </div>
  )
}

export default AddNote