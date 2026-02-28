"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return(
        <button onClick={() => router.back()} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mb-4">
            Go Back
            </button>
    );
}

