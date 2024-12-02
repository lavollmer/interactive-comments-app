import "./App.css";
import React, { useState } from "react";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import Avatar from "./assets/image-amyrobson.png";
import AvatarMax from "./assets/image-maxblagun.png";
import UserAvatar from "./assets/image-juliusomo.png";
import IconDelete from "../src/assets/icon-delete.svg";
import DeleteModal from "./components/DeleteModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [comments, setComments] = useState([
    {
      id: 0,
      username: "amyrobson",
      avatar: Avatar,
      avatarDesc: "User Avatar",
      text:
        "Impressive! Though it seems the drag feature could be improved...",
      created_at: "2024-12-02T00:00:00Z",
      replies: [],
    },
    {
      id: 1,
      username: "maxblagun",
      avatar: AvatarMax,
      avatarDesc: "User Avatar",
      text:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      created_at: "2024-12-02T00:00:00Z",
      replies: [],
    },
  ]);
  const [replyBoxVisible, setReplyBoxVisible] = useState(null);


  const handleDeleteClick = (index) => {
    setCommentToDelete(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCommentToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (commentToDelete !== null) {
      setComments(comments.filter((_, i) => i !== commentToDelete));
      handleCloseModal();
    }
  };

  const handleReplyClick = (index) => {
    setReplyBoxVisible(index);
  };

  const currentUser = {
    username: "juliusomo",
    avatar: UserAvatar,
  };

  const handleAddComment = (commentText) => {
    setComments([
      ...comments,
      {
        id: comments.length,
        username: currentUser.username,
        avatar: currentUser.avatar,
        avatarDesc: "User Avatar",
        comment: commentText,
        created_at: new Date().toISOString(),
        replies: [],
      },
    ]);
  };

  const handleAddReply = (commentIndex, replyText) => {
    const newComments = [...comments];
    if (!newComments[commentIndex].replies) {
      newComments[commentIndex].replies = [];
    }
    newComments[commentIndex].replies.push({
      text: replyText,
      created_at: new Date().toISOString(),
      username: currentUser.username,
      avatar: currentUser.avatar,
    });
    setComments(newComments);
    setReplyBoxVisible(null);
  };

  return (
    <>
      <div className="background bg-very-light-gray p-6">
        <div className="flex flex-col items-center justify-center">
          {comments.map((comment, index) => (
            <CommentCard
              key={index}
              AvatarImage={comment.avatar}
              AvatarDesc="User Avatar"
              name={comment.username}
              comment={comment.text}
              created_at={comment.createdAt}
              replies={comment.replies || []} // Pass replies array, ensure it's not undefined
              currentUser={currentUser} // Pass current user information
              onDelete={() => handleDeleteClick(index)} // Pass delete handler
              onReplyClick={() => handleReplyClick(index)} // Pass reply handler
              replyBoxVisible={replyBoxVisible === index} // Pass reply box visibility
              onAddReply={(replyText) => handleAddReply(index, replyText)} // Pass add reply handler
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pt-8">
          <UserComment onAddComment={handleAddComment} />
        </div>
        {showModal && (
          <DeleteModal onClose={handleCloseModal} onConfirm={handleConfirmDelete} />
        )}
      </div>
    </>
  );
}

export default App;
