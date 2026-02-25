import Link from "next/link";
import Counter from "./components/Counter";

export default function Home(){
  return(
    <div>
      <h1> Hi Next.JS!</h1>
      <p>Next.js is the best</p>
      <Link href="/about"> About me! </Link>
      <Counter />
    </div>
  );
}



