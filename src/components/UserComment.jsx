import React from "react";
import Avatar from "../assets/image-juliusomo.png";
import SendButton from "./SendButton";

const UserComment = () => {
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = data.get("commentUser");
        console.log(value);
        };
        
  return (
    <div className="flex flex-row items-center font-rubik bg-white rounded-lg p-2 mt-10">
      {/* name, avatar image, reply button and comment */}
      <div className="flex flex-row justify-evenly space-x-20 p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center text-md space-x-4">
            <img src={Avatar} alt="Amy Robson Image" className="h-8 w-8" />
          </div>
        </div>
        <form>
          <div className="outline outline-very-light-gray rounded-lg focus:outline-2 focus:border-moderate-blue">
            <input className="text-lg text-grayish-blue font-semi-bold pr-2" name="commentUser"/>
          </div>
        </form>
        {/* reusable button SEND */}
        <div>
          <SendButton />
        </div>
      </div>
    </div>
  );
};

export default UserComment;
