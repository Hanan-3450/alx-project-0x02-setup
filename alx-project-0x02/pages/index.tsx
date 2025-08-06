// alx-project-0x02/pages/index.tsx
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h2 className="text-2xl font-semibold">
          Welcome to ALX SoloForge Project!
        </h2>
      </main>
    </div>
  );
}
