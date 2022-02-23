import { Fragment } from "react";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";

const DUMMY_POSTS = [
  {
    title: "Gee=tting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for the future",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
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

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

// 1) Hero => Present yourself
// 2) Featured Posts
