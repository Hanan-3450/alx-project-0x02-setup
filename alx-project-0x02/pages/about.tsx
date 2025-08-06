import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8 text-center space-y-6">
        <h1 className="text-3xl font-bold">About This Project</h1>
        <p className="mt-4 text-gray-700">
          This is the About page for the ALX SoloForge Next.js project.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Button size="small" shape="rounded-sm">
            Small Rounded-SM
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Rounded-MD
          </Button>
          <Button size="large" shape="rounded-full">
            Large Rounded-Full
          </Button>
        </div>
      </main>
    </div>
  );
}
