"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { postsSelectors } from "@/redux/posts/postsSelectors";
import { Box } from "@mui/material";
import PostCard from "@/components/PostCard";
import { useRouter } from "next/navigation";
import { deletePost } from "@/redux/posts/operations";

const PostPage = () => {
  const { id } = useParams();
  const posts = useSelector(postsSelectors.selectPosts);
  const isLoading = useSelector(postsSelectors.selectPostsIsLoading);
  const dispatch = useDispatch();
  const router = useRouter();

  const onDelete = (id) => {
    dispatch(deletePost(id));
    router.push(`/posts`);
  };

  const post = posts.find((post) => post.id === Number(id));

  return (
    <Box
      sx={{
        pt: "50px",
        px: {
          xs: 2,
          sm: 4,
          md: 8,
          lg: 12,
          xl: 18,
        },
      }}
    >
      <PostCard
        post={post}
        isLoading={isLoading}
        onDelete={onDelete}
        onOpen={() => {
          router.push("/posts");
        }}
      />
    </Box>
  );
};
export default PostPage;
