import { useState } from "react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);
  function passwordShowHide() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <h1>Hello, Welcome to my website.</h1>
      <div><input placeholder="Email" type="text"/></div>
      <div>
        <input placeholder="Password" type={showPassword === true? "password":"text"}/>
        <button onClick={passwordShowHide}>{showPassword === true ? "Show" : "Hide"}</button>
      </div>
      <button className="btn">Login </button>
      <button className="btn">Sign up</button>
    </>
  );
}
