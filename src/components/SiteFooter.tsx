import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "gatsby";

const SiteFooter = () => {
  return (
    <Footer container={true}>
      <Footer.Copyright
        href="/"
        by="Mainnote Limited"
        year={new Date().getFullYear()}
      />
      <Footer.LinkGroup>
        <Footer.Link href="/">
          About
        </Footer.Link>
        <Footer.Link href="/">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="/">
          Terms Of Use
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default SiteFooter;
