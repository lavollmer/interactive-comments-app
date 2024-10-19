import "./App.css";
import React, { useState } from "react";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import DeleteButton from "./components/Delete";
import Avatar from "./assets/image-amyrobson.png";
import AvatarMax from "./assets/image-maxblagun.png";
import UserAvatar from "./assets/image-juliusomo.png";
import IconDelete from "../src/assets/icon-delete.svg";
import ReplyCard from "./components/ReplyCard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [replyBoxVisible, setReplyBoxVisible] = useState(null); 
  const commentCreatedAt = new Date();

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReplyClick = () => {
    setReplyBoxVisible(index);
  }

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
        replies: [],
      },
    ]);
  };

  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };


  const handleAddReply = (commentIndex, replyText) => {
    const newComments = [...comments];
    if (!newComments[commentIndex].replies) {
      newComments[commentIndex].replies = []; // Ensure replies array is initialized
    }
    newComments[commentIndex].replies.push({
      text: replyText,
      createdAt: new Date(),
      username: currentUser.username,
      avatar: currentUser.avatar,
    });
    setComments(newComments);
    setReplyBoxVisible(null); // Hide reply box after submitting
  };
  return (
    <>
      <div className="background bg-very-light-gray p-6">
        <div className="flex flex-col items-center justify-center pt-8">
          <div>
            <CommentCard
              AvatarImage={Avatar}
              AvatarDesc="User Avatar"
              name="amyrobson"
              comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
              created_at={commentCreatedAt}
              replies={[]} // Initialize replies array
              currentUser={currentUser} // Pass current user information
              onReplyClick={() => handleReplyClick(0)} // Pass reply handler
              replyBoxVisible={replyBoxVisible === 0} // Pass reply box visibility
              onAddReply={(replyText) => handleAddReply(0, replyText)} // Pass add reply handler
            />
          </div>
          <div className="pt-8">
            <CommentCard
             AvatarImage={Avatar}
             AvatarDesc="User Avatar"
             name="amyrobson"
             comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
             created_at={commentCreatedAt}
             replies={[]} // Initialize replies array
             currentUser={currentUser} // Pass current user information
             onReplyClick={() => handleReplyClick(0)} // Pass reply handler
             replyBoxVisible={replyBoxVisible === 0} // Pass reply box visibility
             onAddReply={(replyText) => handleAddReply(0, replyText)} // Pass add reply handler
            />
          </div>
          <div className="pt-8 ">
            {comments.map((comment, index) => (
              <CommentCard
              key={index}
              AvatarImage={comment.avatar}
              AvatarDesc="User Avatar"
              name={comment.username}
              comment={comment.text}
              created_at={comment.createdAt}
              replies={comment.replies || []} 
              currentUser={currentUser} // Pass current user information
              onDelete={() => handleDeleteComment(index)} // Pass delete handler
              onReplyClick={() => handleReplyClick(index + 1)} // Pass reply handler
              replyBoxVisible={replyBoxVisible === index + 1} // Pass reply box visibility
              onAddReply={(replyText) => handleAddReply(index + 1, replyText)} // Pass add reply handler
              />
            ))}
            {/* <div className="replies mt-4">
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
            </div> */}
          </div>
        </div>
        <div className="flex flex-col pt-8 p-6 w-full">
          <UserComment onAddComment={handleAddComment} />
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
