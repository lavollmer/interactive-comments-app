import React, { useState } from "react";
import moment from "moment";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";
import ReplyCard from "./ReplyCard";
import IconDelete from "../assets/icon-delete.svg";

const CommentCard = ({
  AvatarImage,
  AvatarDesc,
  name,
  comment,
  created_at,
  replies,
  currentUser,
  onDelete,
  replyBoxVisible,
  onAddReply,
}) => {
  //creating a variable to hold the like count
  const [likes, setLikes] = useState(0);

  //variable to hold reply and reply box visibility
  const [replyText, setReplyText] = useState("");
  // const [showReplyBox, setShowReplyBox] = useState(null);
  const [showReplyBox, setShowReplyBox] = useState(false); // Declare state for showReplyBox

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

  const handleReplyClick = () => {
    setReplyText(`@${name} `);
    setShowReplyBox(true);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onAddReply(replyText);
      setReplyText("");
      // setShowReplyBox(false);
    }
  };

  console.log(replies);

  return (
    <div className="flex flex-row font-rubik pt-8">
      <div className="flex flex-row bg-white rounded-lg p-4 w-full">
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

        <div className="flex flex-col space-y-4 p-4 w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={AvatarImage} alt={AvatarDesc} className="h-8 w-8" />
              <h1 className="font-bold text-black">{name}</h1>
              <p>{moment(created_at).fromNow()}</p>
            </div>
            <div className="flex items-center space-x-4">
              {currentUser.username === name && (
                <button className="text-red-500 font-bold" onClick={onDelete}>
                  <img src={IconDelete} alt="Delete Icon" className="h-4 w-4" />
                  Delete
                </button>
              )}
              <button
                className="flex flex-row items-center justify-center text-moderate-blue font-bold"
                onClick={handleReplyClick}
              >
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
          {replyBoxVisible && (
            <div className="reply-box">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
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
          {replies.length > 0 && (
            <div className="replies mt-4">
              {replies.map((reply, index) => (
                <ReplyCard
                  key={index}
                  AvatarImage={reply.avatar}
                  AvatarDesc="User Avatar"
                  username={reply.username}
                  replyText={reply.text}
                  createdAt={reply.createdAt}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
