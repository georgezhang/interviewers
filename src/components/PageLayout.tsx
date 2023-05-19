import React from "react";
import type { PropsWithChildren } from "react";
import theme from "./theme";
import { Flowbite } from "flowbite-react";
import TopNavbar from "./TopNavbar";
import SiteFooter from "./SiteFooter";

const PageLayout = ({ children }: PropsWithChildren) => (
  <Flowbite theme={{ theme }}>
    <main>
      <TopNavbar />
      <div className="container min-h-[82vh]">{children}</div>
      <SiteFooter />
    </main>
  </Flowbite>
);

export default PageLayout;
