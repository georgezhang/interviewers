import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <ol className="mx-8 space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400 text-base">{children}</ol>
  );
}
