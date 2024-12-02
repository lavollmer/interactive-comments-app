import "./App.css";
import React, { useState } from "react";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import Avatar from "./assets/image-amyrobson.png";
import AvatarMax from "./assets/image-maxblagun.png";
import UserAvatar from "./assets/image-juliusomo.png";
import IconDelete from "../src/assets/icon-delete.svg";

function App() {
  const [replyBoxVisible, setReplyBoxVisible] = useState(null);
  const commentCreatedAt = new Date();

  // initializes a state variable called comments with an array of objects
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

  // when a user on the CommentCard clicks reply - the Box will become visible
  const handleReplyClick = () => {
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
    //creating a new variable newComments with a copy of the comments array
    const newComments = [...comments];
    // if the commentIndex in newComments object does not have replies, create a new empty array
    if (!newComments[commentIndex].replies) {
      newComments[commentIndex].replies = [];
    }
    //when a commentIndex and replyText are passed as arguments to the function we push on the new comment with the information below to object
    newComments[commentIndex].replies.push({
      text: replyText,
      //new timestamp for the reply
      createdAt: new Date(),
      //use currentuser username and avatar
      username: currentUser.username,
      avatar: currentUser.avatar,
    });
    //take the newComments and run it through the setComments function
    setComments(newComments);
    //trun the ReplyBoxVisible to null
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
              onDelete={() => handleDeleteComment(index)} // Pass delete handler
              onReplyClick={() => handleReplyClick(index)} // Pass reply handler
              replyBoxVisible={replyBoxVisible === index} // Pass reply box visibility
              onAddReply={(replyText) => handleAddReply(index, replyText)} // Pass add reply handler
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pt-8">
          <UserComment onAddComment={handleAddComment} />
        </div>
      </div>
    </>
  );
}

export default App;
