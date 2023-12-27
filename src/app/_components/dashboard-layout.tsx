"use client";

import { type ReactNode } from "react";

import Menu from "./Menu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full">
      <Menu />
      <div className="p-3">{children}</div>
    </main>
  );
}
