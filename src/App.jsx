import "./App.css";
import React, { useState } from "react";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import DeleteButton from "./components/Delete";
import Avatar from "./assets/image-amyrobson.png";
import AvatarMax from "./assets/image-maxblagun.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  const commentCreatedAt = new Date();

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="background bg-very-light-gray">
        <div className="p-10">
          <div>
            <CommentCard
              AvatarImage={Avatar}
              AvatarDesc="User Avatar"
              name="amyrobson"
              comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
              created_at={commentCreatedAt}
            />
          </div>
          <div className="pt-10">
            <CommentCard
              AvatarImage={AvatarMax}
              AvatarDesc="User Avatar"
              name="maxblagun"
              comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
              created_at={commentCreatedAt}
            />
          </div>
          <UserComment />
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
