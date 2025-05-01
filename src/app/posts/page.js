"use client";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { postsSelectors } from "@/redux/posts/postsSelectors";
import CardGrid from "@/components/CardGrid";
import PostSpeedDial from "@/components/PostSpeedDial";
import SearchField from "@/components/SearchField";
import { Box } from "@mui/material";

const PostsPage = () => {
  const [value, setValue] = useState("");
  const posts = useSelector(postsSelectors.selectPosts);

  const filteredPosts = useMemo(() => {
    if (!value.trim()) return posts;
    return posts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, posts]);

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
      <Box sx={{ paddingBottom: "16px" }}>
        <SearchField
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Box>
      <CardGrid posts={filteredPosts} />
      <PostSpeedDial />
    </Box>
  );
};
export default PostsPage;
