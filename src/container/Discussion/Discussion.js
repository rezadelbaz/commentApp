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
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     setComment(response.data.slice(0, 4));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComment(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
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
        <FullComment commentID={selectedId} />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
