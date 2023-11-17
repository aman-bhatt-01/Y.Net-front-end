import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="login">
      <div class="login-container">
        <img class="logo" src="assets/y.net logo.jpg" alt="logo" />
        <form id="signup_form">
          <input id='name' className="input-field" type="text" required placeholder="Name" />
          <input id='emailid' className="input-field" type="text" required placeholder="Email ID" />
          <input id='phoneno' className="input-field" type="number" required placeholder="Phone Number" />
          <input id='username' className="input-field" type="text" minlength="4" maxlength="12" required placeholder="Username (what people will call you)" />
          <input id='password' className="input-field" type="password" required placeholder="Password" />
          <input id='repass' className="input-field" type="text" required placeholder="Retype Password" />
          <input id='btn' className="btn" type="submit" value="Register" />
        </form>
        <Link to="/login">
          <button className="loginRegisterButton">
            Log into Account
          </button>
        </Link>
      </div>
    </div>
  );
}
