import React, { useState } from "react";
import moment from "moment";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";


const CommentCard = ({ AvatarImage, AvatarDesc, name, comment, created_at }) => {
  //creating a variable to hold the like count
  const [likes, setLikes] = useState(0);

  //increasing likes
  const increaseLikes = () => {
    setLikes(likes + 1);
    console.log(likes);
  };

  //decreasing likes
  const decreaseLikes = () => {
    setLikes(likes - 1);
    console.log(likes);
  };

  const timestamp = Date.now();
  const dateTimeAgo = moment(new Date(created_at)).fromNow();
  console.log(dateTimeAgo);

  return (
    <div className="flex flex-row items-center font-rubik bg-white rounded-lg p-2 CommentCard">
      {/* increment and decrement button */}
      <div className="flex flex-col items-center rounded-lg bg-very-light-gray m-4 p-4">
        {/* increase likes with onclick button */}
        <button title="increase" onClick={increaseLikes}>
          <img
            src={IconPlus}
            alt="Increment Icon"
            className="font-bold text-moderate-blue pb-2"
          />
        </button>
        {/* displaying the likes based on the state */}
        <p className="text-moderate-blue font-bold text-lg pb-4">{likes}</p>
        {/* decreasing likes based onclick */}
        <button title="decrease" onClick={decreaseLikes}>
          <img src={IconMinus} alt="Decrement Icon" className=" font-bold" />
        </button>
      </div>
      {/* name, avatar image, reply button and comment */}
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center text-md space-x-4">
            <img src={AvatarImage} alt={AvatarDesc} className="h-8 w-8" />
            <h1 className="font-bold text-black">{name}</h1>
            <p>{moment(created_at).fromNow()}</p>
          </div>
          <div>
            <button className="flex flex-row items-center font-bold text-moderate-blue text-lg">
              <img src={IconReply} alt="Reply Icon" className="pr-2" />
              Reply
            </button>
          </div>
        </div>
        <div>
          <p className="text-lg text-grayish-blue font-semi-bold pr-2">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
