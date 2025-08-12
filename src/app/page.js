//app/page.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const KaranjiLanding = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/health-care");
  }, [router]);

  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">

    </main>
  );
};

export default KaranjiLanding;