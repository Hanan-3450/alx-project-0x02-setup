import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">Posts</h1>

        {loading ? (
          <p className="text-center">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                userId={post.userId}
                title={post.title}
                content={post.body}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
