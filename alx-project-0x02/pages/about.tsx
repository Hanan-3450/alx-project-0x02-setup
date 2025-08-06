// alx-project-0x02/pages/about.tsx
import React from "react";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">About This Project</h1>
        <p className="mt-4 text-gray-700">
          This is the About page for the ALX SoloForge Next.js project.
        </p>
      </main>
    </div>
  );
}
