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

  // Deletes blog
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("UseEffect Ran!");
  });

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        blogTitle="All Blogs"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Lisa")}
        blogTitle="Lisa's Blogs"
      />
    </div>
  );
};

export default Home;
