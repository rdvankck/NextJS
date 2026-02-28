type Props = {
    params: Promise<{ id: string }>
};

export default async function PostPage({params}: Props) {
    const { id } = await params;

    return (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Post #{id}</h1>
          <p className="text-gray-600">
            This is the content of post {id}.
          </p>
        </div>
      );
}