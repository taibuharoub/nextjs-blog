import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import { getAllFeaturedPosts } from "../lib/posts-util";

export default function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Ty&#39; Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getAllFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 1800, // 30 mins
  };
}

// 1) Hero => Present yourself
// 2) Featured Posts
