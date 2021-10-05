import "./newComment.css";
import { FiEdit } from "react-icons/fi";
import { useState } from "react/cjs/react.development";
const NewComment = ({ postCommentHandler }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHAndler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <div className="newComment">
      <h2 className="title">
        <span>
          <FiEdit />
        </span>
        Add new Comment
      </h2>
      <div className="formControl">
        <label>name</label>
        <input type="text" onChange={changeHAndler} name="name" />
      </div>
      <div className="formControl">
        <label>email</label>
        <input type="email" onChange={changeHAndler} name="email" required />
      </div>
      <div className="formControl">
        <label>body</label>
        <textarea type="textarea" onChange={changeHAndler} name="body" />
      </div>
      <button onClick={() => postCommentHandler(comment)} className="addbtn">
        add new Comment
      </button>
    </div>
  );
};

export default NewComment;
