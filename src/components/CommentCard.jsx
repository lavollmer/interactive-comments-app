import React, { useState } from "react";
import moment from "moment";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";
import ReplyCard from "./ReplyCard";

const CommentCard = ({
  AvatarImage,
  AvatarDesc,
  name,
  comment,
  created_at,
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

  const timestamp = Date.now();
  const dateTimeAgo = moment(new Date(created_at)).fromNow();
  console.log(dateTimeAgo);

  const handleReplyClick = () => {
    setReplyText(`@${name} `); // Prepend the username to the reply text
    setShowReplyBox(true);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      setReplies([
        ...replies,
        { text: replyText, createdAt: new Date(), username: name },
      ]);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  return (
    <div className="flex flex-row font-rubik">
      <div className="flex flex-row items-center bg-white rounded-lg p-2 CommentCard">
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
              {comment}
            </p>
          </div>
          {showReplyBox && (
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
                Submit Reply
              </button>
            </div>
          )}
          {replies.length > 0 && (
            <div className="replies mt-4">
              {replies.map((reply, index) => (
                <ReplyCard
                  key={index}
                  AvatarImage={AvatarImage}
                  AvatarDesc={AvatarDesc}
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
