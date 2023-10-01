import { Card } from "@tremor/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import "github-markdown-css/github-markdown-light.css";
import "./markdown.css";
import React from "react";

const flatten = (text, child) => {
	return typeof child === "string"
		? text + child
		: React.Children.toArray(child.props.children).reduce(flatten, text);
};

const HeadingRenderer = (props) => {
	var children = React.Children.toArray(props.children);
	var text = children.reduce(flatten, "");
	var slug = text.toLowerCase().replace(/\W/g, "-");
	return React.createElement("h" + props.level, { id: slug }, props.children);
};

const GithubMarkdown = async ({ markdownData }: { markdownData: string }) => {
	return (
		<Card className="p-1 mt-6">
			<ReactMarkdown
				className="markdown-body"
				rehypePlugins={
					[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings] as any
				}
				remarkPlugins={[remarkGfm]}
			>
				{markdownData}
			</ReactMarkdown>
		</Card>
	);
};

export default GithubMarkdown;
