import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Deska");

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          history.push("/");
        })
        .catch((err) => console.log(err.message));
    }, 1000);
  };

  return (
    <div className="create">
      <h2>Add a New Blog!</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: {title}</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content Body: {body}</label>
        <textarea
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>Author: {author}</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="Deska">Deska</option>
          <option value="Dana">Dana</option>
          <option value="Restiana">Restiana</option>
        </select>

        {!isLoading ? (
          <button>Add Blog</button>
        ) : (
          <button disabled>Adding...</button>
        )}
      </form>
    </div>
  );
};

export default Create;
