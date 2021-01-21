import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error, setData } = useFetch(
    "http://localhost:8000/blogs"
  );

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setData(blogs.filter((blog) => blog.id !== id));
      console.log("Blog successfully Deleted!");
    });
  };

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs" />
    </div>
  );
};

export default Home;
