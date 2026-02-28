import Link from "next/link";

export default function PostsPage() {
    const posts = [
        { id: 1, title: "First Post" },
        { id: 2, title: "Second Post" },
        { id: 3, title: "Third Post" },
      ];
      return (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Posts</h1>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }