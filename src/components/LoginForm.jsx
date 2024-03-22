import { useState } from "react";

function LoginForm() {
  const [user, setUserName] = useState("");
  const [pass, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <>
      <div className="max-w-md w-full space-y-3  place-items-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center">
            <img
              alt=""
              className="h-14 w-14"
              src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
            />
          </div>
          <br/>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            SIGN IN{" "}
          </h2>
          <br />

          <hr />
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:border-red-500"
              required
              value={user}
              onChange={(e) => setUserName(e.target.value)}
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:border-red-500"
              required
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onSubmit={handleSubmit}
            >
              Sign In
            </button>
            
            <a
              className="inline-block align-baseline text-xs font-bold text-sm text-red-300 hover:text-red-800"
              href="#/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
