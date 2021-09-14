import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

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

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog added!");
      setIsPending(false);
      history.push("/");
    });
  };

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
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
