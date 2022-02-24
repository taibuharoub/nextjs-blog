import ReactMarkdown from "react-markdown";

import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  title: "Gee=tting Started with NextJs",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: "# this is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
