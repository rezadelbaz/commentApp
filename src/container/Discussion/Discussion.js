import { useEffect, useState } from "react";
import Comment from "../../components/comment/Comment";
import FullComment from "../../components/FullComment/fullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./Discussion.css";
import axios from "axios";
const Discussion = () => {
  const [comments, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComment(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };
  const postCommentHandler = (comment) => {
    axios
      .post("http://localhost:3001/comments", comment)
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => setComment(res.data))
      .catch();
  };

  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>comments Loading...</p>
        )}
      </section>
      <section>
        <FullComment commentID={selectedId} setComments={setComment} />
      </section>
      <section>
        <NewComment postCommentHandler={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
