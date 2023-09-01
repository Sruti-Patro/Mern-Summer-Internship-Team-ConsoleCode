import { useState } from "react";
import "./SignLog.css";
import { useNavigate } from "react-router";
import Navbar from "../components/sruti/navbar/Navbar";

function SignUp() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  async function onSubmit() {
    if (name === "" || email === "" || pass === "") {
      console.log(name, "", email, "", pass);
      alert("Input fields are empty");
    } else {
      let obj = {
        name,
        email,
        pass,
      };
      let res = await fetch("http://localhost:8080/user", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      console.log(data, "user list");
      featchData();
      alert("login successful:) You are being directed to Login Page");
      navigate("/login");
    }
  }

  async function featchData() {
    let res = await fetch("http://localhost:8080/user");
    let data = await res.json();
    console.log(data, "user list");
    setUser(data);
  }

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input
              placeholder="Enter Usernamer"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <i className="fa-solid fa-envelope"></i>
            <input
              placeholder="Enter E-Mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <i className="fa-solid fa-eye-slash"></i>
            <input
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">Already have an account? Login</div>
        <div className="submit-container">
          <button className="submit" onClick={() => navigate("/login")}>
            Log In
          </button>
          <div className="submit" onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
