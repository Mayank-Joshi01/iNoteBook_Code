import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar';
import About from './Component/About';
import Home from './Component/Home';
import NoteState from './Context/notes/NoteState';
import Alert from './Component/Alert';
import Signup from './Component/Signup'
import Login from './Component/Login'
import User from './Component/User';
import { useState } from 'react';

function App() {

  const [alert,setAlert] = useState(null)

  const Showalert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (

      <NoteState>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route exact path='/iNoteBook/' element={<Home Showalert={Showalert}/>} />
          <Route exact path='/iNoteBook/about/' element={<About Showalert={Showalert}/>} />
          <Route exact path='/iNoteBook/signup/' element={<Signup Showalert={Showalert}/>} />
          <Route exact path='/iNoteBook/login/' element={<Login Showalert={Showalert}/>} />
          <Route exact path='/iNoteBook/user/' element={<User Showalert={Showalert}/>} />
        </Routes>
        </div>
      </NoteState>

    
  );
}

export default App;
