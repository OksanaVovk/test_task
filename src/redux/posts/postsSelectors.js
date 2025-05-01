const selectPosts = (state) => state.posts.data;
const selectPostsIsLoading = (state) => state.posts.isLoading;
const selectPostsError = (state) => state.posts.error;
const selectPostsComments = (state) => state.posts.comments;

export const postsSelectors = {
  selectPosts,
  selectPostsIsLoading,
  selectPostsError,
  selectPostsComments,
};
