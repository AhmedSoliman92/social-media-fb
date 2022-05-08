import { useContext, useRef } from 'react';
import './login.css'
import { loginCall } from '../../components/apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@material-ui/core"
export default function Login() {
  const username = useRef();
  const password = useRef();
  const {user, isFetching, dispatch} = useContext(AuthContext)
  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(loginCall({username:username.current.value,password:password.current.value},dispatch));
  }
  console.log(user)
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">KnockMe</h3>
          <span className="login-desc">Connect with friends and the world around you on KnockMe</span>
        </div>
        <div className="login-right">
          <form className="login-box" >
            <input placeholder="Email" className="login-input" ref={username} required/>
            <input placeholder="Password" type="password" className="login-input" ref={password} required minLength="6" />
            <button type="submit" onClick={handleLogin} className="login-btn">{isFetching? <CircularProgress color='white' />: "Log In"} </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-btn">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
