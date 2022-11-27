import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import image from "../../images/auth/signup.gif";
const SignUp = () => {
  const { signUp, userUpdate } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [createUserEmail, setCreateUserEmail] = useState("");

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
            saveUser(data.name, data.email, data.type);
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

  const saveUser = (email, name, type) => {
    const user = { name, email, type };
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
        // getUserToken(email);
      });
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
                {...register("type", { required: true })}
                className="select select-bordered input-bordered w-full max-w-xs"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
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
          <button className="btn btn-outline w-4/5 mx-auto">
            GOOGLE SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
