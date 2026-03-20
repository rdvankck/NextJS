type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache", // Ürünler sık değişmez, cache'le
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}