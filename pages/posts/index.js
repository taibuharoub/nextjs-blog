import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export default AllPostsPage;

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
