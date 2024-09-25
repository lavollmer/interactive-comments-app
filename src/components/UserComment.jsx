import React from "react";
import Avatar from "../assets/image-juliusomo.png";
import ActionButton from "./ActionButton";

const UserComment = () => {
  return (
    <div className="flex flex-row items-center font-rubik bg-white rounded-lg p-2">
      {/* name, avatar image, reply button and comment */}
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center text-md space-x-4">
            <img src={Avatar} alt="Amy Robson Image" className="h-8 w-8" />
          </div>
        </div>
        <div>
          <p className="text-lg text-grayish-blue font-semi-bold pr-2">
            hi
          </p>
        </div>
        <div>
            <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default UserComment;
