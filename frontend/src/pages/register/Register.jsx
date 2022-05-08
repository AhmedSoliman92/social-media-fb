import axios from 'axios';
import { useRef } from 'react';
import {useNavigate} from 'react-router';
import './register.css'

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useNavigate();
  const handleRegister = async(e)=>{
    e.preventDefault();
    if(password.current.value !== confirmPassword.current.value){
      confirmPassword.current.setCustomValiddity("Passwords are not match")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post('users/register',user);
        history('/login');

      } catch (err) {
        console.log(err);
      }
    }
    }
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">KnockMe</h3>
          <span className="login-desc">Connect with friends and the world around you on KnockMe</span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleRegister}>
          <input placeholder="Username" className="login-input" ref={username}/>
            <input placeholder="Email" type="email" className="login-input" ref={email} />
            <input placeholder="Password" type="password" className="login-input" ref={password} />
            <input placeholder="Confirm Password" type="password" className="login-input" ref={confirmPassword} />
            <button className="login-btn" type='submit'>Sign Up</button>
            <button className="login-register-btn">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
