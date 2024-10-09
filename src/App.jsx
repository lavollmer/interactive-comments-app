import "./App.css";
import React, { useState } from "react";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import DeleteButton from "./components/Delete";
import Avatar from "./assets/image-amyrobson.png";
import AvatarMax from "./assets/image-maxblagun.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const commentCreatedAt = new Date();

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddComment = (commentText) => {
    setComments([...comments, { text: commentText, createdAt: new Date(), username: "juliusomo" }]);
  };
  return (
    <>
      <div className="background bg-very-light-gray">
        <div className="p-10">
          {comments.map((comment, index) => (
            <CommentCard
              key={index}
              AvatarImage={Avatar}
              AvatarDesc="User Avatar"
              name={comment.username}
              comment={comment.text}
              created_at={comment.createdAt}
              replies={replies}
              setReplies={setReplies}
            />
          ))}
          <div className="replies mt-4">
            {replies.map((reply, index) => (
              <ReplyCard
                key={index}
                AvatarImage={Avatar}
                AvatarDesc="User Avatar"
                username={reply.username}
                replyText={reply.text}
                createdAt={reply.createdAt}
              />
            ))}
          </div>
          <div>
            <UserComment onAddComment={handleAddComment} />
          </div>
        </div>
        <div>
          <DeleteButton show={showModal} onClose={handleCloseModal}>
            <h2>Are you sure you want to delete this comment?</h2>
            <button onClick={handleCloseModal}>Cancel</button>
            <button
              onClick={() => {
                /* Add delete logic here */
              }}
            >
              Delete
            </button>
          </DeleteButton>
        </div>
      </div>
    </>
  );
}

export default App;
