import "./App.css";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";

function App() {
  return (
    <>
      <div className="background bg-very-light-gray">
        <div className="p-10">
          <CommentCard />
        </div>
        <div className="p-10">
          <UserComment />
        </div>
      </div>
    </>
  );
}

export default App;
