
import './App.css';
import profile from "./image/a.png"
import email from "./image/email.png"
import pass from "./image/pass.png"
function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div classname="imgs">
            <div classname = "container-image">
              { <img src={profile} alt = "profile"/> }
            </div>

          </div>
          <div>
            <h1>Login Page</h1>
          <img src={email} alt ="email" className = "email"/>
          <input type = "text" placeholder="Username" className="name"/>
        </div>
        <p> </p>
        <div className="second-input">
          <img src={pass} alt ="pass" className = "email"/>
          <input type = "text" placeholder="Password" className="name"/>
        </div>
        <div className="login-button"></div>
        
        <button>Login</button>
        <p className="link">
          <a href="#">Forgot Password?</a> Or <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default App;
