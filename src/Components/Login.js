import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login()
{
  const nav=useNavigate();
  function submit(e)
    {
      e.preventDefault();
    }

  function navigateto()
  {
     nav('./home')
  }


  return(
    <form onSubmit={(e)=>submit(e)}>
      <h1>Login</h1>
      <label>Username</label><br/>
      <input type="text"/><br/>
      <label>Password</label><br/>
      <input type="password"/><br/><br/>
      <input onClick={navigateto} type="submit" id="smt"/>
    </form>
  )
}

export default Login;