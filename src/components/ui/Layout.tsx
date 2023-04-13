import { type ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return <main className="mt-12 px-6 lg:mx-auto lg:max-w-7xl pb-32">{children}</main>;
}
