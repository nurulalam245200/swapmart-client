import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import logImage from "../../images/auth/auth.gif";

const Login = () => {
  const { login, googleSignUp } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginUserEmail, setLogInUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  const handleLoginSubmit = (data) => {
    setLoginError("");
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLogInUserEmail(data.email);
        console.log(user);
        toast("Successfully Log In");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignUp(googleProvider)
      .then((result) => {
        const user = result.user;
        toast("Add Login Successfully");
        navigate("/");
      })
      .catch((e) => setError(e.message));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={logImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl font-bold text-center text-accent">
            Login Now !
          </h1>
          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password Field is Empty",
                  minLength: {
                    value: 6,
                    message: "Password Atleast 6 charecters",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-rose-600">{errors.password?.message}</p>
              )}
              {loginError && <p className="text-rose-600">{loginError}</p>}
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <p className="text-center">
            Are you New to SwapMart ?
            <Link
              className="text-rose-600 text-xl font-bold ml-2"
              to="/register"
            >
              Sign Up
            </Link>
          </p>
          <div className="divider text-blue-700 font-bold">OR</div>
          {error && <p className="text-rose-600">{error}</p>}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-4/5 mx-auto"
          >
            GOOGLE SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
