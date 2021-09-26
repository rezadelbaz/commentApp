import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./fullComment.css";
const FullComment = ({ commentID }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentID) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentID}`)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
    }
  }, [commentID]);

  let commentDetail = <p>no comment added</p>;
  if (commentID) commentDetail = <p>loading</p>;
  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.body}</p>
        <p>{comment.email}</p>
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
