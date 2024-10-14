import React from "react";
import Avatar from "../assets/image-juliusomo.png";

const UserComment = ({ onAddComment }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = data.get("commentUser");
    onAddComment(value);
    event.target.reset(); // Clear the input field after submission
  }

  return (
    <div className="flex flex-row bg-white rounded-lg w-full font-rubik p-6 space-x-4">
      <div className="flex-shrink-0">
        <img src={Avatar} alt="User Avatar" className="h-8 w-8" />
      </div>
      <div className="flex-grow">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center space-x-4 w-full"
        >
          <input
            className="outline outline-very-light-gray rounded-lg focus:outline-2 focus:border-moderate-blue text-lg text-grayish-blue font-semi-bold w-full h-30 p-4"
            name="commentUser"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            className="flex flex-row items-center justify-center text-md bg-moderate-blue rounded-lg px-4 py-2 text-white font-bold font-rubik"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserComment;
