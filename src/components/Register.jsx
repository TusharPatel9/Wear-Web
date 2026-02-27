import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "name is required",
      },
    },
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
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

    {/* Card */}
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">

      {/* Top Image Section */}
      <div
        className="h-36 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${assets.sign_img})` }}
      >
        <div className="absolute right-6 top-6 text-right">
          <h2
            className="text-2xl font-semibold text-black"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Wear Web
          </h2>
          <p className="text-xs text-gray-600">trendy collection</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-8 py-10">

        <h1 className="text-2xl font-semibold text-center text-teal-600 mb-8">
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">

          {/* Name Field */}
          <div className="relative">
            <fieldset className="border-2 border-teal-600 rounded-md px-3 pt-1 pb-2 bg-white">
              <legend className="px-2 text-sm text-teal-600">
                Enter Your Name
              </legend>

              <input
                type="text"
                className="w-full bg-white outline-none text-gray-800 py-1"
                {...register("name", validateSchema.nameValidator)}
              />
            </fieldset>

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <fieldset className="border-2 border-teal-600 rounded-md px-3 pt-1 pb-2 bg-white">
              <legend className="px-2 text-sm text-teal-600">
                Enter Your Email
              </legend>

              <input
                type="text"
                className="w-full bg-white outline-none text-gray-800 py-1"
                {...register("email", validateSchema.emailValidator)}
              />
            </fieldset>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <fieldset className="border-2 border-teal-600 rounded-md px-3 pt-1 pb-2 bg-white relative">
              <legend className="px-2 text-sm text-teal-600">
                Enter Your Password
              </legend>

              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-white outline-none text-gray-800 py-1 pr-8"
                {...register("password", validateSchema.passwordValidator)}
              />

              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </fieldset>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-md
                       font-semibold shadow-md hover:bg-teal-800 transition"
          >
            SIGN UP
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 font-medium hover:underline"
            >
              LOGIN
            </Link>
          </p>

        </form>
      </div>
    </div>
  </div>
);
}

export default Register;
