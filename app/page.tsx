import Link from "next/link";
import { appConfig } from "@/app.config";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Start splitting bills →
      </Link>
      <ul className="grid gap-3 text-left text-black/70 sm:grid-cols-3">
        <li className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          🧾 Track every shared bill in one place.
        </li>
        <li className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          ➗ Split costs fairly between roommates.
        </li>
        <li className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          ✅ Know who owes whom, no awkward chats.
        </li>
      </ul>
    </section>
  );
}
