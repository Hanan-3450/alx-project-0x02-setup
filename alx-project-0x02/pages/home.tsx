// alx-project-0x02/pages/home.tsx
import React from "react";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      </main>
    </div>
  );
}
