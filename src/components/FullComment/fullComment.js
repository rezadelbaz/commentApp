import "./fullComment.css";
const FullComment = ({ commentID }) => {
  console.log(commentID);
  return (
    <div className="fullComment">
      <p>name</p>
      <p>email</p>
      <p>body</p>
    </div>
  );
};

export default FullComment;
