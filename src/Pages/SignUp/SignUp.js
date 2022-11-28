import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import image from "../../images/auth/signup.gif";
const SignUp = () => {
  const { signUp, userUpdate, googleSignUp } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const [createUserEmail, setCreateUserEmail] = useState("");

  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/login");
  }
  const handleSignUp = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Sign Up");
        const userInfo = {
          displayName: data.name,
        };
        userUpdate(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreateUserEmail(email);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignUp(googleProvider)
      .then((result) => {
        const user = result.user;
        toast("Add SignUp Successfully");
        navigate("/");
        const userData = {
          name: user.displayName,
          email: user.email,
          role: "buyer",
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // setCreateUserEmail());
          });
        console.log(user);
      })
      .catch((e) => setError(e.message));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <p className="text-rose-600 text-xl font-bold text-center">
            Ensure Your User Type Manual SignUp ? <br />{" "}
            <span className="text-secondary font-bold">
              If Don't please SignUp with google !!
            </span>
          </p>
          <h1 className="text-5xl font-bold text-center text-accent">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <select
                {...register("role", { required: true })}
                className="select select-bordered input-bordered w-full max-w-xs"
              >
                <option value="buyer">buyer</option>
                <option value="seller">seller</option>
              </select>
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-emerald-400 text-white"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an Account?
            <Link className="text-rose-600 text-xl font-bold ml-2" to="/login">
              Log In
            </Link>
          </p>
          <div className="divider text-blue-700 font-bold">OR</div>
          <button
            onClick={handleGoogleSignUp}
            className="btn btn-outline w-4/5 mx-auto"
          >
            GOOGLE SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
