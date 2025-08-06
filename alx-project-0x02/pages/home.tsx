// alx-project-0x02/pages/home.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to the Home Page
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Card One"
            content="This is the content for the first card. You can reuse this component anywhere."
          />
          <Card
            title="Card Two"
            content="Here is another card with different content to show how props work."
          />
          <Card
            title="Card Three"
            content="Cards make it easy to keep a consistent design while showing different information."
          />
        </div>
      </main>
    </div>
  );
}
