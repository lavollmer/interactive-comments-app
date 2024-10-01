import "./App.css";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import DeleteButton from "./components/Delete"
import Avatar from "./assets/image-amyrobson.png";

function App() {
  const commentCreatedAt = new Date();
  return (
    <>
      <div className="background bg-very-light-gray">
        <div className="p-10">
          <CommentCard created_at={commentCreatedAt} AvatarDesc={AvatarDesc} AvatarImage={Avatar} />
          <UserComment />
        </div>
        <div>
          <DeleteButton />
        </div>
      </div>
    </>
  );
}

export default App;
