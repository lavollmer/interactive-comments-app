import React from 'react'
import Avatar from "../assets/image-amyrobson.png";
import CommentCard from "../components/CommentCard.jsx"

const Comment = () => {
  return (
    <div>
        <CommentCard
        AvatarImage={Avatar}
        AvatarDesc ="User Avatar"
        name="amy robson"
        comment="hello world"
        />
    </div>
  )
}

export default Comment