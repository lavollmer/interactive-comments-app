import React from 'react'
import Avatar from "../assets/image-amyrobson.png";
import moment from "moment";

const Comment = () => {
  return (
    <div>
        <Card 
        AvatarImage={Avatar}
        AvatarDesc ="Bookmark Landing Page"
        title="Bookmark Landing Page"
        content="A solo project to create a navigation bar, a hero section, a feature section, a call-to-action section, a footer, and a newsletter signup form."
        />
    </div>
  )
}

export default Comment