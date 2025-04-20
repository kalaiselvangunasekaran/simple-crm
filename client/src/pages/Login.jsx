import React from "react";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "./Login.css";
import bgImage from "../assets/login-bg.png"; // ✅ import the image

function Login() {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Logo />
      <div className="login-box">
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <Button text="Login" />
      </div>
    </div>
  );
}

export default Login;
