import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl text-gray-600 mb-8">Page Not Found</h2>
          <p className="text-gray-500 mb-4">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Go to Home
          </Link>
        </div>
      );
}