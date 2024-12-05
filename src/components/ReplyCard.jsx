import React, { useState } from "react";
import moment from "moment";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";
import "./Reply.css";

const ReplyCard = ({
  AvatarImage,
  AvatarDesc,
  username,
  replyText,
  createdAt,
}) => {
  // Creating a variable to hold the like count
  const [likes, setLikes] = useState(0);

  // Variable to hold reply and reply box visibility
  const [replyTextState, setReplyTextState] = useState(""); // Renamed state variable
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
    setReplyTextState(`@${username} `);
    setShowReplyBox(!showReplyBox);
  };

  const handleReplySubmit = () => {
    if (replyTextState.trim()) {
      setReplies([...replies, { text: replyTextState, createdAt: new Date() }]);
      setReplyTextState("");
      setShowReplyBox(false);
    }
  };

  return (
    <div className="flex flex-row items-start justify-center items-center font-rubik bg-white rounded-lg p-2 ml-8 mt-2">
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
      <div>
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
        <div>
          <button
            className="flex flex-row items-center font-bold text-moderate-blue text-lg"
            onClick={handleReplyClick}
          >
            <img src={IconReply} alt="Reply Icon" className="pr-2" />
            Reply
          </button>
          {showReplyBox && (
            <div className="reply-box">
              <textarea
                value={replyTextState} // Use the renamed state variable
                onChange={(e) => setReplyTextState(e.target.value)}
                placeholder="Write your reply..."
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleReplySubmit}
                className="flex flex-row items-center justify-center text-lg bg-moderate-blue rounded-lg px-4 py-4 text-white font-bold font-rubik"
              >
                Reply
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
