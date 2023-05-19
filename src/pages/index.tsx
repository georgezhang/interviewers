import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/PageLayout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="bg-purple h-screen">
      <PageLayout></PageLayout>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
