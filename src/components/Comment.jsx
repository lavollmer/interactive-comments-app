import React from 'react';
import CommentCard from './components/CommentCard';
import Avatar from "../assets/image-amyrobson.png";

function Comment() {

  return (
    <div>
    <CommentCard 
      AvatarImage={Avatar}
      AvatarDesc="User Avatar"
      name="Amy Robson"
      comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
      created_at={created_at}
    />
  </div>
  );
}

export default Comment;