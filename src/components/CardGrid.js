"use client";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { postsSelectors } from "@/redux/posts/postsSelectors";
import { deletePost, getComments } from "@/redux/posts/operations";
import { useRouter } from "next/navigation";

const CardGrid = ({ posts }) => {
  const isLoading = useSelector(postsSelectors.selectPostsIsLoading);

  const dispatch = useDispatch();
  const router = useRouter();

  const onDelete = (id) => {
    dispatch(deletePost(id));
  };

  const onOpen = (id) => {
    dispatch(getComments(id));
    router.push(`/posts/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => (
        // Через особливості фейкового API, яке може присвоювати однакові id новоствореним постам,
        // тимчасово використовується індекс масиву як ключ. У реальному проєкті слід використовувати унікальний id.
        <Grid item xs={12} sm={6} md={4} key={index}>
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
