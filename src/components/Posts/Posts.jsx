import { usePosts } from "../PostContext/PostContext";

import List from "../List/List";

function Posts() {
  const { posts } = usePosts();

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
