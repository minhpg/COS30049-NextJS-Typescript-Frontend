import { Card } from "@tremor/react";
import ReactMarkdown from "react-markdown";

import "github-markdown-css/github-markdown-light.css";
import "./markdown.css";

const GithubMarkdown = async ({ markdownData }: { markdownData: string }) => {
  return (
    <Card className="p-1 mt-6">
      <ReactMarkdown children={markdownData} className="markdown-body" />
    </Card>
  );
};

export default GithubMarkdown;
