import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data: blog, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <p>Written by: {blog.author}</p>
          <button onClick={() => history.push("/")}>Back</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
