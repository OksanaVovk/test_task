import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts/slice";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const postsPersistConfig = {
  key: "posts",
  storage,
};
export const store = configureStore({
  reducer: {
    posts: persistReducer(postsPersistConfig, postsReducer),
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
