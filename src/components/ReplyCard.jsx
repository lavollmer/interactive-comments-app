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
  const [replyTextState, setReplyTextState] = useState("");
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
              Submit Reply
            </button>
          </div>
        )}
        {replies.length > 0 && (
          <div className="replies pt-4">
            {replies.map((reply, index) => (
              <ReplyCard
                key={index}
                AvatarImage={AvatarImage}
                AvatarDesc={AvatarDesc}
                username={username}
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

export default ReplyCard;
