import React, { useState } from "react";
import moment from "moment";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";

const ReplyCard = ({
  AvatarImage,
  AvatarDesc,
  username,
  replyText,
  createdAt,
}) => {
  //creating a variable to hold the like count
  const [likes, setLikes] = useState(0);

    //variable to hold reply and reply box visibility
    const [replyText, setReplyText] = useState("");
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replies, setReplies] = useState([]);

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

  const handleReplyClick = () => {
    setReplyText(`@${username} `);
    setShowReplyBox(!showReplyBox);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      setReplies([...replies, { text: replyText, createdAt: new Date() }]);
      setReplyText('');
      setShowReplyBox(false);
    }
  };
  return (
    <div className="flex flex-row items-center font-rubik bg-white rounded-lg p-2 CommentCard">
      <div className="flex flex-col items-center rounded-lg bg-very-light-gray m-4 p-4">
        <button title="increase" onClick={increaseLikes}>
          <img
            src={IconPlus}
            alt="Increment Icon"
            className="font-bold text-moderate-blue pb-2"
          />
        </button>

        <p className="text-moderate-blue font-bold text-lg pb-4">{likes}</p>

        <button title="decrease" onClick={decreaseLikes}>
          <img src={IconMinus} alt="Decrement Icon" className=" font-bold" />
        </button>
      </div>
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center text-md space-x-4">
            <img src={AvatarImage} alt={AvatarDesc} className="h-8 w-8" />
            <h1 className="font-bold text-black">{username}</h1>
            <p>{moment(createdAt).fromNow()}</p>
          </div>
          <div>
            <button
              className="flex flex-row items-center font-bold text-moderate-blue text-lg"
              onClick={handleReplyClick}
            >
              <img src={IconReply} alt="Reply Icon" className="pr-2" />
              Reply
            </button>
          </div>
        </div>
        <div>
          <p className="text-lg text-grayish-blue font-semi-bold pr-2">
            {replyText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
