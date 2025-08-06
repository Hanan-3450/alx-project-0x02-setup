import React from "react";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-4 text-gray-700">This page will display posts.</p>
      </main>
    </div>
  );
}
