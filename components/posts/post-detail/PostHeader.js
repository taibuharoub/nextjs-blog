import Image from "next/image";
import classes from "./PostHeader.module.css";

function PostHeader({ title, image }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image alt={title} src={image} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
