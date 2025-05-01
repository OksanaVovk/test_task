"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "@/redux/posts/operations";
import { Box } from "@mui/material";
import Hero from "../components/Hero";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <Hero />
    </Box>
  );
};

export default HomePage;
