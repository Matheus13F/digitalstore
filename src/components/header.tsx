import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { ShoppingCart } from "./shoppingCart";
import { SearchForm } from "./searchForm";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          digital.store
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <ShoppingCart />
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span>Minha conta</span>
          <Image
            src="https://github.com/matheus13f.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt="profile pic"
          />
        </Link>
      </div>
    </header>
  );
}
