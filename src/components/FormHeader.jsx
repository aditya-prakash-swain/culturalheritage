import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function FormHeader({ heading,linkName,  linkUrl = "#" }) {
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        <span className="p-5 text-red-700">{heading}</span>
        {/* <Link
          to={linkUrl}
          className="p-5 font-medium text-red-300 hover:text-yellow-500"
        >
          {linkName}
        </Link> */}
      </h2>
    </div>
  );
}


export default FormHeader;
