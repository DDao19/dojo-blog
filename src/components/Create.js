import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleChange = (e) => {
    let blogTitle = e.target.value;
    setTitle(blogTitle);
  };

  const handleTextArea = (e) => {
    let blogBody = e.target.value;
    setBody(blogBody);
  };

  const handleAuthor = (e) => {
    let blogAuthor = e.target.value;
    setAuthor(blogAuthor);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
  };
  console.log(author);
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={handleTitleChange}
        />
        <label>Blog Body</label>
        <textarea required value={body} onChange={handleTextArea}></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={handleAuthor}>
          <option value="" disabled>
            --select Author--
          </option>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
