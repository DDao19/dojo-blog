import { useState } from "react";
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

  return (
    <div className="home">
      <BlogList blogs={blogs} blogTitle="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Lisa")}
        blogTitle="Lisa's Blogs"
      />
    </div>
  );
};

export default Home;
