const BlogList = ({ blogs, blogTitle }) => {
  return (
    <div className="blog-list">
      <h2>{blogTitle}</h2>
      {blogs.map((blog) => (
        <article className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </article>
      ))}
    </div>
  );
};

export default BlogList;