import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  darcula,
  dark,
} from "react-syntax-highlighter/dist/cjs/styles/prism"; //for styling

import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // }, // react markdown will call this method if it finds an image, custom renderer

    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    }, // can use the above custom renderer or this one

    code(code) {
      // const { language, value } = code;
      const { className, children } = code;
      // console.log(code);
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      const match = /language-(\w+)/.exec(className || "");
      // console.log(match);
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          // language={language}
          children={children}
        />
      );
    },
    // code({ node, inline, className, children, ...props }) {
    //   const match = /language-(\w+)/.exec(className || "");
    //   return !inline && match ? (
    //     <SyntaxHighlighter
    //       children={String(children).replace(/\n$/, "")}
    //       style={dark}
    //       language={match[1]}
    //       PreTag="div"
    //       {...props}
    //     />
    //   ) : (
    //     <code className={className} {...props}>
    //       {children}
    //     </code>
    //   );
    // },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
