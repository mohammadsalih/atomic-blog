import List from "../List/List";

function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
