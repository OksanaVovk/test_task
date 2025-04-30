"use client";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { useSelector, useDispatch } from "react-redux";
import { postsSelectors } from "@/redux/posts/postsSelectors";
import { deletePost } from "@/redux/posts/operations";

const CardGrid = () => {
  const isLoading = useSelector(postsSelectors.selectPostsIsLoading);
  const posts = useSelector(postsSelectors.selectPosts);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deletePost(id));
  };

  const onOpen = () => {
    console.log("відкрито");
  };

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardItem
            post={post}
            onDelete={onDelete}
            onOpen={onOpen}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
