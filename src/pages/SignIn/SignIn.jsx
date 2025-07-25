import React, { useContext } from "react";
import signinLotteeData from "../../assets/lotti/signin.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log("log in user", result.user.email);
        const user = {
          email: email,
        };
        axios.post("http://localhost:5000/jwt", user,{withCredentials:true})
        .then((res) => {
          console.log(res.data);
        });
        // navigate(from)
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-90 lg:text-left">
          <Lottie animationData={signinLotteeData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn}>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />

              <div>
                <a className="link link-hover" href="/forgot-password">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
