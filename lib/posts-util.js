// process.cwd() => points to overall projects folder (its an ablosute path to overall projects folder)
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

/* function getPostsData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  // matter will return an object with two properties, 1) content and 2) data
  // data property is an object which contains all the meta data
  // content property is the actual content of the post/ markdown text as a string

  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // replace the .md extension with an empty string

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
} */

// alter to this with both a filename with an extension and a filename without an extension
export function getPostsData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // replace the .md extension with an empty string
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  // matter will return an object with two properties, 1) content and 2) data
  // data property is an object which contains all the meta data
  // content property is the actual content of the post/ markdown text as a string

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // will return an array of strings/file paths
  const postFiles = getPostsFiles();

  // map returns a new array, doesn't change the original array
  const allPosts = postFiles.map((postFile) => {
    return getPostsData(postFile);
  });

  // sort of posts, recent posts sorted infornt of  older posts
  // this also returns a new array
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getAllFeaturedPosts() {
  const allPosts = getAllPosts();
  // check if isFeatured property is true, if its true then return it
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
