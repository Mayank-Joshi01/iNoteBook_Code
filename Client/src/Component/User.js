import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../Context/notes/NoteContext';
import { Buffer } from 'buffer';

function User(props) {
  let context = useContext(noteContext);

  const [password, setpassword] = useState(false)

  const SetIMG = async (formData) => {
    const url = `${process.env.REACT_APP_Backend_Base_URL || "http://localhost:8001/api"}/user/updateimg`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "user-token": localStorage.getItem("token")
      },
      body: formData,
    });
    const json = await response.json();
  }


  let navigate = useNavigate();

  const [imgUrl, setimgUrl] = useState("https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png")

  const [values, setValues] = useState({ btn: false, text: false })

  const [file, setFile] = useState(null)

  const { allNotes, noteLength, user,getUserdata } = context


  useEffect(() => {
     if(localStorage.getItem("token")){
    if (user && user.json) {
      allNotes();
      if(user.json.img){
      setimgUrl("data:image/png;base64,"+bufferToBase64 (Buffer.from(user.json.img.data)))
      }
    }
}
    else {
      navigate('/iNoteBook/login/')
    }
    // eslint-disable-next-line
  }, [user])
useEffect(() => { 
    getUserdata();
  
}, [])
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
        setimgUrl(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const bufferToBase64 = (buffer) => {
    return buffer.toString('base64')
  };


  const handelchange = (e) => {
    const file = e.target.files[0];
        if (file) {
            setFile(file);
            setValues({ btn: true, text: true });
            convertToBase64(file);
        }
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData)
    SetIMG(formData);
 props.Showalert("Image Uploaded Successfully","success")
    setValues({ btn: false, text: false })
  }

///////// Password Update ///////////////////////////////

const handelpassword = () => {
  setpassword(!password)
}

const handelPasswordSubmit = async (e) => {
  e.preventDefault();
  const password = e.target[0].value;
  const url = `${process.env.REACT_APP_Backend_Base_URL || "http://localhost:8001/api"}/user/updatepassword`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "user-token": localStorage.getItem("token")
    },
    body: JSON.stringify({ password }),
  }); 
  const json = await response.json();
  if (json.sucess) {
    props.Showalert("Password Updated Successfully","success")
  } else {
    props.Showalert("Password Not Updated","danger")
  }
  e.target[0].value = "";
  setpassword(false)
}


  return (
    <div className="m-t30">
      {localStorage.getItem('token') && <section className="w-100 px-4 py-5" style={{ borderRadius: ".5rem .5rem 0 0" }}>
        <div className="row d-flex justify-content-center">
          <div className="col col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: " 15px" }}>
              <div className="card-body p-4">
                <div className="d-flex">
                  <div>
                    <div className="flex-shrink-0" style={{ width: "130px", height: "130px" }}>
                      <img src={imgUrl} align="middle" alt="Generic placeholder image" className="img-fluid img-form" style={{ width: "130px", height: "130px", bordeRadius: "10px" }} />
                    </div>
                    <form action={`${process.env.REACT_APP_Backend_Base_URL || "http://localhost:8001/api"}/user/updateimg`} method="post" encType="multipart/form-data" className='img-form' >
                      <label htmlFor="image" className="img-label btn btn-outline-primary me-1 flex-grow-1">{values.text ? "Change" : "Change Image"}</label>
                      <input type="file" id='image' name="profileImage" onChange={handelchange} />
                      <button type="submit" onClick={handelSubmit} className={`btn img-label btn-outline-success me-1 flex-grow-1 ${values.btn ? "" : "d-none"}`}>Save</button>
                    </form>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">{user&&user.json?user.json.name:""}</h5>
                    <p className="mb-2 pb-1">Student</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                      <div>
                        <p className="small text-muted mb-1">Notes</p>
                        <p className="mb-0">{noteLength}</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary me-1 flex-grow-1">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* password update */}

          <div className="password-container" >
          <div className="password-udate">
            <p onClick={handelpassword}>Update Password</p>
         {password&&<form onSubmit={handelPasswordSubmit}>
            <input type="text" style={{lineHeight:"20px"}} required minLength={8} placeholder='Enter new password'/>
            <button type="submit" style={{lineHeight:"20px", marginLeft:"10px"}}>Update</button>
          </form>}
          </div>
        </div>

        </div>
      </section>}

    </div>
  )
}

export default User