import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(props) {


  let navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" })

  const handelSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL || "http://localhost:8001/api"}/auth/createuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: user.name, email: user.email, password: user.password }),

    });

    const json = await response.json();
    if (json.sucess) {
      // redirect
      localStorage.setItem('token', json.token)
      props.Showalert("Account Created Successfully", "success")
      navigate('/')
    }
    else {
      props.Showalert("Invalid Credentials", "danger")
    }

  }

  const handelOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  return (
    <div className="m-t30">
      <h2>Create an account to continue to iNotebook</h2>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" required className="form-label">Username</label>
          <input type="text" className="form-control" required onChange={handelOnchange} name='name' id="userName" placeholder='Username' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" required onChange={handelOnchange} name='email' id="exampleInputEmail1" placeholder='Email' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" minLength={8} required onChange={handelOnchange} name='password' id="exampleInputPassword1" placeholder='Password' />
        </div>
        <button type="submit" className="btn btn-success" >SignUp</button>
      </form>
    </div>
  )
}

export default Signup