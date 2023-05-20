import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <p className="mb-6 text-base font-normal text-gray-500 lg:text-base dark:text-gray-400">
      {children}
    </p>
  );
}
