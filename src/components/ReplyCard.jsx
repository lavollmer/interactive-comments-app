import React from "react";
import moment from "moment";

const ReplyCard = ({ AvatarImage, AvatarDesc, username, replyText, createdAt }) => {
  return (
    <div className="flex flex-col items-start font-rubik bg-white rounded-lg p-2 ml-8 mt-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center text-md space-x-4">
          <img src={AvatarImage} alt={AvatarDesc} className="h-8 w-8" />
          <h1 className="font-bold text-black">{username}</h1>
          <p>{moment(createdAt).fromNow()}</p>
        </div>
      </div>
      <div>
        <p className="text-lg text-grayish-blue font-semi-bold pr-2">
          {replyText}
        </p>
      </div>
    </div>
  );
};

export default ReplyCard;