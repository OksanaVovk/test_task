const selectPosts = (state) => state.posts.data;
const selectPostsIsLoading = (state) => state.posts.isLoading;
const selectPostsError = (state) => state.posts.error;

export const postsSelectors = {
  selectPosts,
  selectPostsIsLoading,
  selectPostsError,
};
