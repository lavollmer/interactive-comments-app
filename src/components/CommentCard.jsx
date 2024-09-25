import React from "react";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";

const CommentCard = () => {
  return (
    <div className="flex flex-row items-center font-rubik bg-white">
      {/* increment and decrement button */}
      <div>
        <p>Up Down</p>
      </div>
      {/* name, avatar image, reply button and comment */}
      <div>
        <div>
          <h1>NAME</h1>
          <button>REPLY</button>
        </div>
        <div>
          <p>COMMENT</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
