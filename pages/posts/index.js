import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    title: "Gee=tting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for the future",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Gee=tting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for the future",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Gee=tting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for the future",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Gee=tting Started with NextJs4",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for the future",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
