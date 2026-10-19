import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Marriott
          <span className="ml-2 text-sm font-normal text-slate-500">
            Frontend Demo
          </span>
        </Link>

        <span className="hidden text-sm text-slate-500 sm:block">
          Technical Exercise
        </span>
      </div>
    </header>
  );
}