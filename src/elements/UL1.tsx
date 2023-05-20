import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <ul className="space-y-2 pl-5 mt-2 list-disc list-inside">{children}</ul>
  );
}
