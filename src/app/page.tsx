import Link from "next/link";
import Counter from "./components/Counter";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Hi Next.JS!</h1>
      <p>Next.js is the best</p>

      <Navigation />

      <div>
        <Link href="/about" className="text-blue-600 hover:underline">
          About me!
        </Link>
      </div>

      <Counter />
    </div>
  );
}
