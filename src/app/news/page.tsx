type NewsItem = {
  id: number;
  title: string;
  body: string;
};

async function getNews(): Promise<NewsItem[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    next: { revalidate: 120 },
  });
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>News</h1>
      <ul>
        {news.map((newsItem) => (
          <li key={newsItem.id}>{newsItem.title}</li>
        ))}
      </ul>
    </div>
  );
}
