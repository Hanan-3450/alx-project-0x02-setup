// components/layout/Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  const linkClass = (path: string) =>
    router.pathname === path
      ? "text-yellow-300 underline"
      : "hover:text-yellow-300";

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-center space-x-8">
      <nav className="flex space-x-6">
        <Link href="/home" className={linkClass("/home")}>
          Home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/posts" className={linkClass("/posts")}>
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
