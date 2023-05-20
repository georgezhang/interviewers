import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <ol className="mx-8 space-y-2 text-gray-500 list-lower-alpha list-inside dark:text-gray-400">{children}</ol>
  );
}
