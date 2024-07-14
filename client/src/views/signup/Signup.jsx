import React, { useState } from "react";
import authGraphic from "../../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import "../../components/Footer/Footer.css";

function Signup() {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        return console.log(data.message);
      }
      setFormdata({});
      if (res.ok) {
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-[90vh] flex bg-[#e6d5b8cc]">
      <div className="hidden md:flex w-7/12 bg-[#F0A500]  items-center rounded-r-[25%] overflow-hidden">
        <img src={authGraphic} alt="Auth" />
      </div>
      <div className="w-full md:w-5/12 flex flex-col gap-10 justify-center items-center">
        <span className="text-4xl font-['Oswald'] tracking-widest">
          Create Account
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  items-center font-['Oswald'] gap-2 tracking-wider "
        >
          <div className="flex flex-col">
            <label htmlFor="username">Username*</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="px-4 py-2 outline-none border-2 border-[#1B1A17] rounded-md font=['Poppins'] min-w-[300px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email*</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="user@service.com"
              className="px-4 py-2 outline-none border-2 border-[#1B1A17] rounded-md font=['Poppins']  min-w-[300px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password*</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="px-4 py-2 outline-none border-2 border-[#1B1A17] rounded-md font=['Poppins']  min-w-[300px]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="min-w-[300px] px-4 py-2 border-2 rounded-md text-white text-2xl font-['Oswald'] border-[#F0A500] my-2 bg-[#1B1A17] hover:bg-[#F0A500] hover:border-[#1B1A17] hover:tracking-[0.25em] transition-all duration-500"
            >
              Sign Up
            </button>
          </div>
          <span className="text-xl">
            Dont have an account?&nbsp;
            <Link to="/signin" className="text-[#481E14] navlink font-semibold">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
