import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <div class="login-container">
        <img class="logo" src="assets/y.net logo.jpg" alt="logo" />
        <form>
          <input id='username' class="input-field" type="email" required placeholder="Username or email" />
          <input id='password' class="input-field" type="password" minLength="6" required placeholder="Password"  />
          <input class="btn" type="submit" value="Login" />
        </form>
        <br />
        <p class="frgt_pss"><a href="frgt.html">Fogot Password ?</a></p>
        <br />
        <br />
        <br />
        <Link to="/register">
          <p class="sgn_up"><a href="signup_page.html">New User? Sign Up</a></p>
        </Link>
        <br/>
        <Link to="/profile/aman">
          <input class="btn" type="submit" value="Enter as Guest User" />
        </Link>

      </div>
    </div>
  );
}
