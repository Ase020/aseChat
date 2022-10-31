import { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);
  return (
    <>
      <Helmet>
        <title>AseChat Register</title>
        <meta
          name="description"
          content="Register to AseChat and connect with friends and family."
        />
      </Helmet>

      <main className="register">
        <div className="card">
          <div className="left">
            <h1>Asechat Social</h1>

            <p>
              Connect with friends, family and the world and share delightful
              experiences wherever you are.
            </p>

            <span>Have an account?</span>

            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>

            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Passsword"
                name="password"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />

              <button>Register</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
