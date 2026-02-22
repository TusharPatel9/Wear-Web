import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateSchema = {
    emailValidator: {
      required: {
        value: true,
        message: "email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
        message: "Please enter a valid email address",
      },
    },
    passwordValidator: {
      required: {
        value: true,
        message: "password is required",
      },
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:
          "Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number & 1 special character required.",
      },
    },
  };

  function onSubmitHandler(data) {
    alert("Form is submiited");
    console.log(data);
  }

  return (
    <div className="min-h-screen flex bg-linear-to-br from-gray-50 to-gray-200">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div
          className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-gray-200 
                        rounded-2xl p-10 shadow-xl 
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {/* Brand Name */}
          <h2 className="text-center text-gray-900 tracking-wide text-lg font-semibold uppercase mb-3">
            Wear Web
          </h2>

          {/* Heading */}
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h1>

          <p className="text-center text-sm text-gray-500 mb-8">
            Login to continue your shopping experience
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmitHandler)}>
            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-black/20
                           focus:border-black transition-all duration-300"
                {...register("email", validateSchema.emailValidator)}
              />

              {errors.email && (
                <div className="mt-2 px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-xs font-medium">
                    {errors.email?.message}
                  </p>
                </div>
              )}
            </div>

            {/* Password */}
            <div className=" relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl
                 focus:outline-none focus:ring-2 focus:ring-black/20
                 focus:border-black transition-all duration-300"
                  {...register("password", validateSchema.passwordValidator)}
                />

                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2
                 text-gray-400 cursor-pointer
                 hover:text-gray-800
                 active:scale-90
                 transition-all duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </div>

              {/* 🔥 Password Error Message Div */}
              {errors.password && (
                <div className="mt-2 px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-xs font-medium">
                    {errors.password?.message}
                  </p>
                </div>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-semibold
                         transition-all duration-300 
                         hover:bg-gray-900 hover:scale-[1.02]
                         active:scale-95 shadow-md"
            >
              Sign In
            </button>

            {/* Register */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <span className="font-medium text-black cursor-pointer hover:underline">
                <Link onClick={() => navigate("/register")}>Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:flex md:w-1/2 relative">
        <div
          className="w-full h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${assets.login_img})`,
          }}
        >
          {/* Optional Content */}
          <div className="absolute bottom-10 left-10 text-white z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
