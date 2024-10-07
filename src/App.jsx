import "./App.css";
import CommentCard from "./components/CommentCard";
import UserComment from "./components/UserComment";
import DeleteButton from "./components/Delete";
import Avatar from "./assets/image-amyrobson.png";

function App() {
  const commentCreatedAt = new Date();
  return (
    <>
      <div className="background bg-very-light-gray">
        <div className="p-10">
          <CommentCard
            AvatarImage={Avatar}
            AvatarDesc="User Avatar"
            name="Amy Robson"
            comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
            created_at={commentCreatedAt}
          />
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
