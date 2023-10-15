import { Card } from "@tremor/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** Import Github markdown styling */
import "github-markdown-css/github-markdown-light.css";
import "./markdown.css";

/** Render markdown to valid HTML */
const GithubMarkdown = ({ markdownData }: { markdownData: string }) => {
	return (
		<Card className="p-1 mt-6">
			<ReactMarkdown
				className="markdown-body"
				rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings] as any}
				remarkPlugins={[remarkGfm]}
			>
				{markdownData}
			</ReactMarkdown>
		</Card>
	);
};

export default GithubMarkdown;
