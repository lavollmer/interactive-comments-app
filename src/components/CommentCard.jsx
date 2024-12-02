import React, { useState } from "react";
import moment from "moment";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";
import ReplyCard from "./ReplyCard";
import IconDelete from "../assets/icon-delete.svg";
import IconEdit from "../assets/icon-edit.svg";
import "../Modal.css";

const DeleteModal = ({ onClose }) => {
  return (
    <div>
      <div className="flex flex-col items-center font-rubik bg-white rounded-lg modal-overlay">
        <div className="modal-content">
          <h1 className="font-bold text-xl">Delete Comment</h1>
          <p className="text-md text-grayish-blue">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <div>
            <button
              className="bg-grayish-blue rounded-lg p-4"
              onClick={onClose}
            >
              NO, CANCEL
            </button>
          </div>
          <div>
            <button className="bg-soft-red rounded-lg p-4">YES, DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentCard = ({
  AvatarImage,
  AvatarDesc,
  name,
  comment,
  created_at,
  replies,
  currentUser,
  onDelete,
  onAddReply,
}) => {
  //creating a variable to hold the like count
  const [likes, setLikes] = useState(0);

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  //variable to hold reply and reply box visibility
  const [replyText, setReplyText] = useState("");
  // const [showReplyBox, setShowReplyBox] = useState(null);
  const [showReplyBox, setShowReplyBox] = useState(false); // Declare state for showReplyBox

  //increasing likes
  const increaseLikes = () => {
    setLikes(likes + 1);
    console.log(likes);
  };

  const toggleModal = () => {
    setIsModalDeleteOpen(!isModalDeleteOpen);
  };

  //decreasing likes
  const decreaseLikes = () => {
    setLikes(likes - 1);
    console.log(likes);
  };

  const handleReplyClick = () => {
    setReplyText(`@${name} `);
    setShowReplyBox(true);
  };

  // Reply button for reply section
  const handleReplySubmit = () => {
    // checks that the reply is not empty
    if (replyText.trim()) {
      // calls the onAddReply function and passes the reply text
      onAddReply(replyText);
      setReplyText("");
    }
  };

  console.log(replies);

  return (
    <div className="flex flex-row justify-center bg-white rounded-lg w-full mt-8">
      {/* increment and decrement button */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-very-light-gray m-4 p-4">
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
            <p className="text-grayish-blue">{moment(created_at).fromNow()}</p>
            {currentUser.username === name && (
              <div className="flex flex-row space-x-2">
                <p className="py-1 px-2 font-bold bg-moderate-blue rounded-lg text-white text-sm">
                  you
                </p>
                <button
                  className="flex flex-row pr-2 items-center text-red-500 font-bold"
                  onClick={toggleModal}
                >
                  <img src={IconDelete} alt="Delete Icon" className="h-4 w-4" />
                  Delete
                </button>
                <button className="flex flex-row items-center justify-center text-moderate-blue font-bold">
                  <img src={IconEdit} alt="Reply Icon" className="pr-2" />
                  Edit
                </button>
              </div>
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
        {/* When the user selects the reply button - the reply box displays */}
        {showReplyBox && (
          <div className="reply-box">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write your reply..."
              className="w-full p-2 border rounded"
            />
            {/* Reply button */}
            <button
              onClick={handleReplySubmit}
              className="flex flex-row items-center justify-center text-lg bg-moderate-blue rounded-lg px-4 py-4 text-white font-bold font-rubik"
            >
              Reply
            </button>
          </div>
        )}
        <div className="replies mt-4">
          {replies.length > 0 &&
            replies.map((reply, index) => (
              <ReplyCard
                key={index}
                AvatarImage={reply.avatar}
                AvatarDesc="User Avatar"
                username={reply.username}
                replyText={reply.text}
                createdAt={reply.createdAt}
              />
            ))}
          {/* {isModalDeleteOpen && (
            <DeleteModal onClose={toggleModal} onClick={handleDeleteComment} />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
