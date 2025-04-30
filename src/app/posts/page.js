"use client";
import { useSelector } from "react-redux";
import { postsSelectors } from "@/redux/posts/postsSelectors";
import CardGrid from "@/components/CardGrid";

const PostsPage = () => {
  const posts = useSelector(postsSelectors.selectPosts);
  console.log(posts);
  return (
    <div>
      <CardGrid />
    </div>
  );
};
export default PostsPage;
