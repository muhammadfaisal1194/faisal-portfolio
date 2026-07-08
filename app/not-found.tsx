import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-content flex flex-col items-center py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
        404
      </p>
      <h1 className="mt-4 text-4xl">This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-lg text-zinc-400">
        But my AI agents answer every call — let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-ink-950 transition hover:bg-accent-400"
      >
        Back to home
      </Link>
    </div>
  );
}
