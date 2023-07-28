import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../reducer/dataSlice";
import "../components/Posts.css"; // Import the CSS file

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts);
  const isLoading = useSelector((state) => state.data.isLoading);

  // fetching data through reducer fetchPost function
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? ( //apply loading when api data fetching is slow.
        <div className="loading_data">Loading...</div>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
