import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div class="container">
        <form action="#">
          <h2>Login-form</h2>
          <div class="input-field">
            <input type="text" required />
            <label>Enter email</label>
          </div>
          <div class="input-field">
            <input type="password" required />
            <label>Enter password</label>
          </div>
          <div class="forget">
            <label for="Save-login">
              <input type="checkbox" id="Save-login" />
              <p>Save login information</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Log In</button>
          <div class="Create-account">
            <p>
              Don't have an account? <a href="#">Create account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
