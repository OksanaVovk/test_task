"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "@/redux/posts/operations";
import Hero from "../components/Hero";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);
  return <Hero />;
};

export default HomePage;
