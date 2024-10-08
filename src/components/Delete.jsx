import React from "react";
import "../Modal.css";

const Delete = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="flex flex-col items-center font-rubik bg-white rounded-lg modal-overlay">
      <div className="modal-content">
        <h1 className="font-bold text-xl">Delete Comment</h1>
        <p className="text-md text-grayish-blue">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4 modal-close">
        <div>
          <button className="bg-grayish-blue rounded-lg p-4" onClick={onClose}>NO, CANCEL</button>
          {children}
        </div>
        <div>
          <button className="bg-soft-red rounded-lg p-4">YES, DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
