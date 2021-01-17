import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "Lorem ipsum ....",
      author: "Restiana",
      id: 1,
    },
    {
      title: "My First Articles",
      body: "Lorem ipsum ....",
      author: "Dana",
      id: 2,
    },
    {
      title: "My Second Articles",
      body: "Lorem ipsum ....",
      author: "Harliansyah",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs" />
    </div>
  );
};

export default Home;
