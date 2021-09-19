import "./newComment.css";
const NewComment = () => {
  return (
    <div className="newComment">
      <div>
        <label>name</label>
        <input type="text" />
      </div>
      <div>
        <label>email</label>
        <input type="email" />
      </div>
      <div>
        <label>body</label>
        <input type="texterea" />
      </div>
    </div>
  );
};

export default NewComment;
