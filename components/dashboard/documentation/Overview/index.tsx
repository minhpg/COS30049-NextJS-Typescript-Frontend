import { Card } from "@tremor/react";
import { readFile } from "fs/promises";
import showdown from "showdown";
import parse from "html-react-parser"
import ReactMarkdown from "react-markdown"

import "github-markdown-css/github-markdown-light.css"
import "./markdown.css"

const OverviewTailwind = async () => {
  var converter = new showdown.Converter();
  const markdownData = await readFile("./overview.md");
  const html = converter.makeHtml(markdownData.toString());
  return (
    <Card className="prose">
      {parse(html)}
    </Card>
  )
};

const Overview = async () => {
  const markdownData = await readFile("./overview.md");
  return (
    <Card className="p-1 mt-6">
      <ReactMarkdown children={markdownData.toString()} className="markdown-body"/>
    </Card>
  )
}

export default Overview;
