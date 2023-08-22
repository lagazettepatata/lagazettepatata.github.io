import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

export default function Post({ frontmatter, markdown}) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}