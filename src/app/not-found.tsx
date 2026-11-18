import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-40 pb-24">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
        Error 404
      </p>
      <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white">
        Page not found
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
        The page you’re looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-xl bg-[#d4af37] px-6 py-3 font-bold text-black transition-colors hover:bg-[#f3d36b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
      >
        Back to home
      </Link>
    </section>
  );
}
