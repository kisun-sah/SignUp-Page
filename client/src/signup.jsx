import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
        alert("Registration successful!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #6B73FF 10%, #000DFF 100%)",
      }}
    >
      <div
        className="bg-white p-4 rounded shadow-lg"
        style={{ width: "350px", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4" style={{ color: "#000DFF" }}>
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="form-control rounded-pill"
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "10px",
                borderColor: "#000DFF",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="form-control rounded-pill"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                borderColor: "#000DFF",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="form-control rounded-pill"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px",
                borderColor: "#000DFF",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 text-white rounded-pill mb-3"
            style={{
              backgroundColor: "#000DFF",
              padding: "10px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#6B73FF")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#000DFF")}
          >
            Register
          </button>
          <p className="text-center">Already have an account?</p>
          <Link
            to="/login"
            className="btn w-100 rounded-pill"
            style={{
              backgroundColor: "#f1f1f1",
              borderColor: "#000DFF",
              padding: "10px",
            }}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
