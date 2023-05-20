import React from "react";
import type { PropsWithChildren } from "react";

const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className="m-auto w-4/5 sm:px-16 xl:px-48">{children}</div>;
};

export default PageContainer;
