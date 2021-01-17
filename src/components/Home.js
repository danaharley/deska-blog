import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error(`can't fetch the data`);
        }
        return res.json();
      })
      .then((result) => {
        setBlogs(result);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs" />
    </div>
  );
};

export default Home;
