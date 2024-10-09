import React from "react";
import Avatar from "../assets/image-juliusomo.png";
import SendButton from "./SendButton";

const UserComment = ({onAddComment}) => {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = data.get("commentUser");
    onAddComment(value);
    event.target.reset(); // Clear the input field after submission
  }


  return (
    <div className="flex flex-row items-center font-rubik bg-white rounded-lg p-2 mt-10">
    <div className="flex flex-row justify-evenly space-x-20 p-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center text-md space-x-4">
          <img src={Avatar} alt="User Avatar" className="h-8 w-8" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="outline outline-very-light-gray rounded-lg focus:outline-2 focus:border-moderate-blue">
          <input
            className="text-lg text-grayish-blue font-semi-bold pr-2"
            name="commentUser"
            placeholder="Add a comment..."
          />
        </div>
        <div>
          <SendButton type="submit" />
        </div>
      </form>
    </div>
  </div>
  );
};

export default UserComment;
