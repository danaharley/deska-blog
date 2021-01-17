const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-lists">
      <h3>{title}</h3>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <span>Author : {blog.author}</span>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
