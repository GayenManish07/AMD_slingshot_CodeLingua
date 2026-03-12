import ReactMarkdown from "react-markdown"


type Props = {
    content: string
}

export default function MarkdownCard({ content }: Props) {
    return (
        <div className="markdown-card">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}