import Link from "next/link";

  export default function PostNotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 mb-4">
          The post you are looking for does not exist.
        </p>
        <Link
          href="/posts"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Back to Posts
        </Link>
      </div>
    );
  }