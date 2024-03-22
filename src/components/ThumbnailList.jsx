import React from "react";

function ThumbnailList() {
  return (
    <div className="flex">
      <div className="w-full grid grid-cols-1 bg-yellow-100 rounded shadow-md px-3 md:px-5 py-3 md:py-5 m-2 border-black-100 hover:border-2">
        <img
          className="w-full h-auto rounded-l"
          src="#"
          alt="..."
        />
        <span className="m-1">Name of the Heritage</span>
      </div>
    </div>
  );
}

export default ThumbnailList;
