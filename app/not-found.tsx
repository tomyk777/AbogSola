"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <section className="w-full min-h-screen bg-muted">
      <div className="section-frame flex min-h-screen items-center justify-center text-center">
        <div>
          <h1 className="mb-4 text-4xl font-bold not-italic">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </section>
  );
}
