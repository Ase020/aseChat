import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import "./register.scss";

const Register = () => {
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
              <input type="text" placeholder="Username" />

              <input type="email" placeholder="Email" />

              <input type="password" placeholder="Passsword" />

              <input type="password" placeholder="Confirm Passsword" />

              <button>Register</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
