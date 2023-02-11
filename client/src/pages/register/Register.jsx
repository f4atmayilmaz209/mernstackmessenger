import "./register.css"
import {useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router";


export default function Register() {
    const username=useRef()
    const email=useRef()
    const password=useRef()
    const passwordAgain=useRef()
    const navigate=useNavigate()

    const handleClick=async(e)=>{
        e.preventDefault();
        if(passwordAgain.current.value!==password.current.value){
            passwordAgain.current.setCustomValidity("Password dont match!")
        }else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,

            }
            try{
              await axios.post("/auth/register",user)
              navigate("/login")

            }catch(err){
                console.log(err)

            }
            
        }
    }


    return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">Social</h3>
                  <span className="loginDesc">Connect with friends and the world around you on social.</span>
              </div>
              <div className="loginRight">
                  <form className="loginBox" onSubmit={handleClick}>
                      <input placeholder="Username" required ref={username} className="loginInput" />
                      <input type="email" placeholder="Email" required ref={email} className="loginInput" />
                      <input minLength="6" type="password" placeholder="Password" required ref={password} className="loginInput" />
                      <input type="password" placeholder="Password Again" required ref={passwordAgain} className="loginInput" />
                      <button className="loginButton" type="submit">Sign Up</button>
                      <button className="loginRegisterButton">Log into your Account</button>
  
                  </form>
              </div>
  
          </div>
      </div>
    )
  }
  