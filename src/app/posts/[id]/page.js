import { useParams } from "next/navigation";

export default function PostPage() {
  const { id } = useParams(); // Отримуємо динамічний параметр id з URL

  return (
    <div>
      <h1>Пост {id}</h1>
      <p>Тут буде вміст поста з id {id}.</p>
    </div>
  );
}
