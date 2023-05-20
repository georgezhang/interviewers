import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/PageLayout";
import Jumpoton from "../components/Jumpoton";
import Downloads from "../components/Downloads";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="bg-purple min-h-screen">
      <PageLayout>
        <Jumpoton />
        <Downloads />
      </PageLayout>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
