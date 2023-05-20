import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <ul className="space-y-4 text-gray-500 list-none list-inside dark:text-gray-400 text-base">{children}</ul>
  );
}
