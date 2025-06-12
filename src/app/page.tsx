import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Match me</h1>
      <Link href="/members" className="text-2xl text-red-400">
        Members
      </Link>
    </div>
  );
}
