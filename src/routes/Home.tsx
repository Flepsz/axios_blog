import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data;
      setPosts(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Ocorreu um erro ao buscar os posts.");
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold uppercase text-center mb-6">
        Últimos posts
      </h1>
      {loading ? (
        <p className="text-3xl font-bold">Carregando...</p>
      ) : error ? (
        <p className="text-3xl font-bold">{error}</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col mb-6 pb-6 border-b border-b-[#777]"
          >
            <h2 className="text-2xl font-bold mb-4 capitalize">{post.title}</h2>
            <p className=" mb-4">{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
