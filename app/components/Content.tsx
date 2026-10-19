"use client";

import { useMemo, useState } from "react";

const initialItems = [
  { id: 1, name: "React", category: "Frontend" },
  { id: 2, name: "Next.js", category: "Framework" },
  { id: 3, name: "TypeScript", category: "Language" },
  { id: 4, name: "GraphQL", category: "API" },
];

export default function Content() {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return initialItems.filter((item) =>
      item.name.toLowerCase().includes(normalizedSearch)
    );
  }, [search]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
          Technical Assessment
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frontend Exercise
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          A simple React interface ready for components, state management,
          filtering, and API integration exercises.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <label
          htmlFor="search"
          className="mb-2 block text-sm font-medium"
        >
          Search technologies
        </label>

        <input
          id="search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />

        <p className="mt-4 text-sm text-slate-500">
          {filteredItems.length} result(s)
        </p>

        <ul className="mt-3 divide-y divide-slate-100">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-medium">{item.name}</span>

              <span className="text-sm text-slate-500">
                {item.category}
              </span>
            </li>
          ))}
        </ul>

        {filteredItems.length === 0 && (
          <p className="py-6 text-center text-slate-500">
            No results found.
          </p>
        )}
      </div>
    </section>
  );
}