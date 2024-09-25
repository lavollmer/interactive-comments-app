import React from "react";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";
import IconReply from "../assets/icon-reply.svg";
import Avatar from "../assets/image-amyrobson.png";

const CommentCard = () => {
  return (
    <div className="flex flex-row items-center font-rubik bg-white m-6 rounded-lg">
      {/* increment and decrement button */}
      <div>
        <p>Up Down</p>
      </div>
      {/* name, avatar image, reply button and comment */}
      <div>
        <div className="flex flex-row items-center justify-between p-4">
          <div className="flex flex-row items-center justify-center space-x-4">
            <img src={Avatar} alt="Amy Robson Image" className="h-8 w-8" />
            <h1 className="font-bold text-black">amyrobson</h1>
            <p className="text-md text-grayish-blue">1 day ago</p>
          </div>
          <div>
            <button className="flex flex-row items-center font-bold text-moderate-blue">
                <img src={IconReply} alt="Reply Icon" />
                Reply
            </button>
          </div>
        </div>
        <div>
          <p className="text-md text-grayish-blue p-4">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
