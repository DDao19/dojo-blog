import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

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
