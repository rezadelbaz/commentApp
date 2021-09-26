import "./newComment.css";
import { FiEdit } from "react-icons/fi";
import { useState } from "react/cjs/react.development";
import axios from "axios";
const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHAndler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", comment)
      .then((res) => console.log(res))
      .catch();
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
        <input type="email" onChange={changeHAndler} name="email" />
      </div>
      <div className="formControl">
        <label>body</label>
        <textarea type="textarea" onChange={changeHAndler} name="content" />
      </div>
      <button onClick={postCommentHandler}>add new Comment</button>
    </div>
  );
};

export default NewComment;
