import { useEffect, useState } from "react";
import Comment from "../../components/comment/Comment";
import FullComment from "../../components/FullComment/fullComment";
import NewComment from "../../components/NewComment/NewComment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Discussion.css";
import axios from "axios";
const Discussion = () => {
  const [comments, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComment(data);
      } catch (error) {
        setError(true);
      }
    };
    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };
  // const postCommentHandler = (comment) => {
  //   axios
  //     .post("http://localhost:3001/comments", comment)
  //     .then((res) => axios.get("http://localhost:3001/comments"))
  //     .then((res) => setComment(res.data))
  //     .catch();
  // }
  const postCommentHandler = async (comment) => {
    try {
      await axios.post("http://localhost:3001/comments", comment);
      const { data } = await axios.get("http://localhost:3001/comments");
      setComment(data);
    } catch (error) {}
  };
  const renderComments = () => {
    let renderValue = <p>Loadings...</p>;
    if (error) {
      renderValue = <p>fetching Error</p>;
      toast.error("bye bye", { theme: "dark" });
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };
  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComment
          commentID={selectedId}
          setComments={setComment}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment postCommentHandler={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
