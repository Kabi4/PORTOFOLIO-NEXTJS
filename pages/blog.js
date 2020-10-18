import Link from "next/link";
import React from "react";
import Layout from "../Components/Layout";

const Post = ({slug, title }) => {
  return (
    <li style={{textTransform: "capitalize"}}>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>{title}</Link>
    </li>
  );
};

const blog = () => {
  return (
    <Layout title="Blogs">
      <ul>
        <Post slug="post-angular" title="angular" />
        <Post slug="post-vue" title="vue" />
        <Post slug="post-react" title="react" />
        <Post slug="post-next"  title="next"/>
      </ul>
    </Layout>
  );
};

export default blog;
