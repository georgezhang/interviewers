import React from "react";
import type { PropsWithChildren } from "react";

//* use this layout in MDX pages
export const Container = ({ children }: PropsWithChildren) => {
  return <div className="m-auto w-4/5">{children}</div>;
};
