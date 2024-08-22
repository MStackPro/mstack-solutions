import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center flex flex-col justify-center items-center h-screen gap-2">
      <h2 className="text-6xl font-semibold">404</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link href={"/"}>
          <Button>go to Homepage</Button>
        </Link>
    </main>
  );
}
