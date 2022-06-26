
import './App.css';
import profile from "./image/a.png"
import email from "./image/email.png"
import pass from "./image/pass.png"
import newuser from "./image/newuser.jpeg"
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    
    <div className="main">
      <div className="sub-main">
        
      <div>
      
            <div classname = "newuser">
              { <img src={newuser} alt = "newuser"/> }
            </div>

          
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          value = {registerEmail}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

        <div>
          <div classname="imgs">
            <div classname = "container-image">
              { <img src={profile} alt = "profile"/> }
            </div>

          </div>
          <div>
            <h1>Login Page</h1>
          <img src={email} alt ="email" className = "email"/>
          <input type = "text" placeholder="Username" className="name"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}/>
        </div>
        <p> </p>
        <div className="second-input">
          <img src={pass} alt ="pass" className = "email"/>
          <input type = "text" placeholder="Password" className="name"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}/>
        </div>
        <div className="login-button"></div>
        
        <button onClick={login}> Login</button>
        
      </div>
    </div>
    
    </div>
  );
}

export default App;
