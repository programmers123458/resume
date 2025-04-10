import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-login">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
