import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'

export default function Post({ frontmatter, markdown}) {
  return (
    <div>
      <Head>
        <title>Demo Blog | {frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}