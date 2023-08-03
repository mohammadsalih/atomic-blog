import { useContext } from "react";

import { PostContext } from "../PostContext/PostContext";

import List from "../List/List";

function Posts() {
  const { posts } = useContext(PostContext);

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
