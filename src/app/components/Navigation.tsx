"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const page = searchParams.get("page");

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className="p-4 bg-gray-100 rounded space-y-4">
      <div className="flex gap-4">
        <button
          onClick={handleHome}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Home
        </button>
        <button
          onClick={handleBack}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Go Back
        </button>
        <button
          onClick={handleRefresh}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Refresh
        </button>
      </div>

      <div className="text-sm text-gray-600">
        <p>Current Page: <strong>{pathname}</strong></p>
        <p>Category: <strong>{category || "none"}</strong></p>
        <p>Page: <strong>{page || "none"}</strong></p>
      </div>
    </div>
  );
}
