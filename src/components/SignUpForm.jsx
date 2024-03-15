import React, { useState } from "react";
import FormHeader from "./FormHeader";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log("signupState")
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

  return (
    <>
    
    <div className="w-full grid place-items-center h-screen">
    
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <FormHeader heading={"Sign Up"} linkUrl="/LoginForm" linkName={"Login"} />
        <br/>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Set A Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:border-red-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up for Free
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default SignUpForm;
