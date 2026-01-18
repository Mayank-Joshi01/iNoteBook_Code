import React, { useEffect ,useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import {useNavigate} from 'react-router-dom'


const Navbar = () => {

  

    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    
    let location = useLocation();
    let navigate = useNavigate();

const handelLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/iNoteBook/login/")
}

let condition = width < 992 ? true : false;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#198754"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/iNoteBook/">iNotebook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname === "/iNoteBook/" ? "active" : ""}`} to="/iNoteBook/" ><span data-bs-toggle={condition ? "collapse" : undefined}
                        data-bs-target={condition ? "#navbarSupportedContent" : undefined}
                        aria-controls={condition ? "navbarSupportedContent" : undefined}
                        aria-expanded="false">Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname === "/iNoteBook/about/" ? "active" : ""}`} to="/iNoteBook/about/" ><span  data-bs-toggle={condition ? "collapse" : undefined}
                        data-bs-target={condition ? "#navbarSupportedContent" : undefined}
                        aria-controls={condition ? "navbarSupportedContent" : undefined}
                        aria-expanded="false">About</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="user_Container">
            {!localStorage.getItem("token")?<form>
                        <NavLink to="/iNoteBook/login/"  className="btn btn-light mx-2" role="button" >Login</NavLink>
                        <NavLink to="/iNoteBook/signup/"  className="btn btn-light mx-1" role="button" >Signup</NavLink>
                        </form>: <div className='user'> <NavLink to="/iNoteBook/user/"> <i className="fa-solid fa-circle-user user-icon"></i></NavLink>
                         <button type="button" className="btn btn-light" onClick={handelLogout} >Logout</button></div>}
            </div>


        </>
    )
}

export default Navbar