import { notFound } from "next/navigation";
import BackButton from "@/app/components/BackButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ];

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="p-8">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">This is the content of post {id}.</p>
    </div>
  );
}
