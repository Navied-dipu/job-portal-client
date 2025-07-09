import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLotteeData from "../../assets/lotti/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import Social from "../shared/Social";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    }

    // TODO: Implement Firebase Auth login or backend API call
    console.log(email, password);
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch((error) => {console.log(error.massege)})
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-70 lg:text-left">
          <Lottie animationData={registerLotteeData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleLogin}>
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
              <Social></Social>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
