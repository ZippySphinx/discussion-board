import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function Posts({ posts }) {
  const renderPosts =
    posts.length > 0 ? (
      posts.map((post) => <Post key={post.id} post={post} />)
    ) : (
      <div />
    );
  return <div className="posts">{renderPosts}</div>;
}

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
