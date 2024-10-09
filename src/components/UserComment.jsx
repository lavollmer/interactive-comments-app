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
    <div className="flex flex-row font-rubik bg-white rounded-lg p-2 mt-10 w-full">
      <img src={Avatar} alt="User Avatar" className="h-8 w-8" />

      <form onSubmit={handleSubmit}>
        <div className="outline outline-very-light-gray rounded-lg focus:outline-2 focus:border-moderate-blue">
          <input
            className="text-lg text-grayish-blue font-semi-bold pr-2"
            name="commentUser"
            placeholder="Add a comment..."
          />
        </div>
        <button type="submit" className='flex flex-row items-center justify-center text-lg bg-moderate-blue rounded-lg px-8 py-4 text-white font-bold font-rubik'>
           SEND
        </button>
      </form>
    </div>
  );
};

export default UserComment;
