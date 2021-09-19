import Comment from "../../components/comment/Comment";
import FullComment from "../../components/FullComment/fullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./Discussion.css";
const Discussion = () => {
  return (
    <main>
      <section>
        <Comment />
        <Comment />
        <Comment />
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
