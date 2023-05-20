import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <h2 className="text-4xl py-2 font-extrabold dark:text-white">{children}</h2>
  );
}
