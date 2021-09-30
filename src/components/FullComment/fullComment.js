import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./fullComment.css";
const FullComment = ({ commentID, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentID) {
      axios
        .get(`http://localhost:3001/comments/${commentID}`)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
    }
  }, [commentID]);
  const deleteHandler = async () => {
    try {
      // axios
      // .delete(`http://localhost:3001/comments/${commentID}`)
      // .then((res) => axios.get("http://localhost:3001/comments"))
      // .then((res) => setComments(res.data))
      // .catch((err) => console.log(err));
      await axios.delete(`http://localhost:3001/comments/${commentID}`);
      const { data } = await axios.get("http://localhost:3001/comments");
      setComments(data);
      setSelectedId(null);
      setComment(null);
    } catch (error) {}
  };
  let commentDetail = <p>no comment added</p>;
  if (commentID) commentDetail = <p>loading</p>;
  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.body}</p>
        <p>{comment.email}</p>
        <button className="btnDle" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;

// <-------------- my code with parent State ----------------------->
// const FullComment = ({ commentID, comments }) => {
//   const [comment, setComment] = useState(null);

//   useEffect(() => {
//     if (comments) {
//       const index = comments.findIndex((c) => c.id === commentID);
//       const selectedComment = { ...comments[index] };
//       setComment(selectedComment);
//     }
//   }, [commentID]);

//   return (
//     <div>
//       {comment ? (
//         <div className="fullComment">
//           <p>{comment.name}</p>
//           <p>{comment.body}</p>
//         </div>
//       ) : (
//         <p>nothing</p>
//       )}
//     </div>
//   );
// };

// export default FullComment;
