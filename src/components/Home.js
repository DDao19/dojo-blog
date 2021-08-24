import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      {isLoading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} blogTitle="All Blogs" />}
    </div>
  );
};

export default Home;
