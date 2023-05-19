import "./src/styles/global.css";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import PageLayout from "./src/components/PageLayout";

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={{ PageLayout }}>{element}</MDXProvider>
);
