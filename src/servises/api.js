export const url = "https://jsonplaceholder.typicode.com";

export const fetchPostsApi = async (userId) => {
  const res = await fetch(`${url}/posts?userId=${userId}`);
  if (!res.ok) throw new Error("Помилка при завантаженні постів");
  return res.json();
};

export const createPostApi = async (newPost) => {
  const res = await fetch(`${url}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  if (!res.ok) throw new Error("Не вдалося створити пост");
  return res.json();
};

export const deletePostApi = async (id) => {
  const res = await fetch(`${url}/posts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Не вдалося видалити пост");
  return id;
};

export const commentsPostApi = async (id) => {
  const res = await fetch(`${url}/posts/${id}/comments`);
  if (!res.ok) throw new Error("Не вдалося отримати коментарі");
  const data = await res.json();
  return data;
};
