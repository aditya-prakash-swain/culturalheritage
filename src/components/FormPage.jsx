// import { useState } from "react";

// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";

// function FormPage() {
//   const [isLoginPage, setIsLoginPage] = useState(true);

//   const togglePage = () => {
//     setIsLoginPage(!isLoginPage);
//   };
//   return (
//     <div className="flex m-10 items-center justify-center h-screen shadow-xl p-4 ">
//       <div className="max-w-md w-full h-1/2 md:w-2/3 md:h-full md:px-4 sm:px-6 lg:px-8">
//         {isLoginPage ? <LoginForm /> : <SignUpForm />}
//       </div>
//       <div className="max-w-md w-full h-1/2 md:w-1/3 md:h-full md:px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center">
//           <div>
//             <img
//               src="https://static.vecteezy.com/system/resources/thumbnails/020/199/990/small_2x/flat-design-login-screen-ui-concept-for-mobile-and-web-applications-vector.jpg"
//               className="max-w-md w-full h-full md:px-4 sm:px-6 lg:px-8"
//             />
//           </div>
//           <div className="my-30">
//             <button
//               onClick={togglePage}
//               className="shadow p-3 rounded border text-white bg-red-700 hover:bg-red-500 "
//             >
//               {isLoginPage
//                 ? "Don't have an account, Sign Up"
//                 : "Have an account, Sign In"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FormPage;

import React from "react";
import "./FormPage.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function FormPage() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-red-900 via-yellow-500 to-red-900">
      <div className="login-wrap my-5 ">
        <div className="login-html text-md ">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label htmlFor="tab-1" className="tab font-semibold">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab font-semibold">
            Sign Up
          </label>
          <div className="login-form">
            <LoginForm />
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
