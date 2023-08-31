import { useState } from "react";
import "./SignLog.css";
import { useNavigate } from "react-router";

function LogIn() {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  async function onSubmit() {
    let i = false;
    let res = await fetch("http://localhost:8080/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data, "user list");

    if (name === "" || pass === "") {
      alert("Input fields are empty");
    } else {
      data.map((el) => {
        if (name === `${el.name}` && pass === `${el.pass}`) {
          featchData(el.name, el, email, el.pass);
          i = true;
        }
      });
      if (i) {
        alert("login successful:) You are being directed to Home Page");
        navigate("/");
      } else {
        alert("incorrect entries!");
      }
    }
  }

  async function featchData(name, email, pass) {
    let obj = {
      name,
      email,
      pass,
    };
    let res = await fetch("http://localhost:8080/user", {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data, "cURRENT user list");
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Log In</div>
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
            <i className="fa-solid fa-eye-slash"></i>
            <input
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">
          Do not have an account? create one by signing up
        </div>
        <div className="submit-container">
          <button className="submit" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          <div className="submit" onClick={onSubmit}>
            Submit
          </div>
        </div>
      </div>
    </>
  );
}
export default LogIn;
