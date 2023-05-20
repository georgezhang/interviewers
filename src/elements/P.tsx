import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      {children}
    </p>
  );
}
