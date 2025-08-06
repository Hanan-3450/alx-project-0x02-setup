import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Card One",
      content:
        "This is the content for the first card. You can reuse this component anywhere.",
    },
    {
      title: "Card Two",
      content:
        "Here is another card with different content to show how props work.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Welcome to the Home Page
        </h1>

        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, idx) => (
            <Card key={idx} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={addPost}
        />
      </main>
    </div>
  );
}
