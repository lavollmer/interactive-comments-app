import "./App.css";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";

function App() {
  const commentCreatedAt = new Date();
  return (
    <>
      <div className="background bg-very-light-gray">
        <div className="p-10">
          <CommentCard created_at={commentCreatedAt} />
          <UserComment />
        </div>
      </div>
    </>
  );
}

export default App;
