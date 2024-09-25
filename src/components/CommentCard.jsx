import React from "react";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";
import Avatar from "../assets/image-amyrobson.png";
import { useState } from "react";

const CommentCard = () => {
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

  return (
    <div className="flex flex-row items-center font-rubik bg-white rounded-lg p-2">
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
            <img src={Avatar} alt="Amy Robson Image" className="h-8 w-8" />
            <h1 className="font-bold text-black">amyrobson</h1>
            <p className="text-grayish-blue">1 day ago</p>
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
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
