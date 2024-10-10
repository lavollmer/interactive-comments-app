import "./App.css";
import React, { useState } from "react";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import DeleteButton from "./components/Delete";
import Avatar from "./assets/image-amyrobson.png";
import AvatarMax from "./assets/image-maxblagun.png";
import UserAvatar from "./assets/image-juliusomo.png";

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
  const currentUser = {
    username: "juliusomo",
    avatar: UserAvatar,
  };

  const handleAddComment = (commentText) => {
    setComments([
      ...comments,
      {
        text: commentText,
        createdAt: new Date(),
        username: currentUser.username,
        avatar: currentUser.avatar,
      },
    ]);
  };
  return (
    <>
      <div className="background bg-very-light-gray p-6">
        <div className="pt-8">
          <div>
            <CommentCard
              AvatarImage={Avatar}
              AvatarDesc="User Avatar"
              name="amyrobson"
              comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
              created_at={commentCreatedAt}
              replies={replies}
              setReplies={setReplies}
            />
          </div>
          <div className="pt-8 w-full">
            <CommentCard
              AvatarImage={AvatarMax}
              AvatarDesc="User Avatar"
              name="maxblagun"
              comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
              created_at={commentCreatedAt}
              replies={replies}
              setReplies={setReplies}
            />
          </div>
          <div className="pt-8 w-full">
          {comments.map((comment, index) => (
              <CommentCard
                key={index}
                AvatarImage={comment.avatar}
                AvatarDesc="User Avatar"
                name={comment.username}
                comment={comment.text}
                created_at={comment.createdAt}
                replies={replies}
                setReplies={setReplies}
              />
            ))}
            <div className="replies mt-4 w-full">
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
          </div>
          <div className="w-full">
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
