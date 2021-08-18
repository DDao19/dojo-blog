import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "This is my first new website!",
      author: "Mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "Welcome to the official party!",
      author: "Lisa",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "To learn more tips, visit....",
      author: "Lisa",
      id: 3,
    },
  ]);
  const [name, setName] = useState("Maria");

  // Deletes blog
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("UseEffect Ran!");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        blogTitle="All Blogs"
        handleDelete={handleDelete}
      />

      <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
