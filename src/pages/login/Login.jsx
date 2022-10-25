import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import "./login.scss";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>AseChat Login</title>
        <meta
          name="description"
          content="Login to AseChat and connect with friends and family."
        />
      </Helmet>

      <main className="login">
        <div className="card">
          <div className="left">
            <h1>Welcome to AseChat</h1>

            <p>
              Connect with friends, family and the world and share delightful
              experiences wherever you are.
            </p>

            <span>Don't have an account?</span>

            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>

            <form>
              <input type="text" placeholder="Username" />

              <input type="password" placeholder="Password" />

              <button>Login</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
