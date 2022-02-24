import Head from "next/head";
import React, { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/postContent";
import { getPostsData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export default PostDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostsData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, // 10 mins
  };
}

export async function getStaticPaths() {
  // return an object with all the paths that should be prepared

  // when we paths to an empty array and fallback to true, then data will be prepared and fetched
  // on demand when we visit the page
  // return {
  //   paths: [],
  //   fallback: true, // if true, we should render some fallback content, set it to blocking to wait
  // };

  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  // for will explictly define all paths in advance
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
