import React from "react";

const Delete = () => {
  return (
    <div>
      <div>
        <h1>Delete Comment</h1>
        <p>Are you sure you want to delete this comment?</p>
      </div>
      <div>
        <div>
          <button>NO CANCEL</button>
        </div>
        <div>
          <button>YES DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
