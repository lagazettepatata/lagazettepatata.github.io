import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import styles from './Funny.module.css'

export default function Funny({ frontmatter, markdown}) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
      <div className={styles.imgs}>
        <img className={styles.funnyImg} src={frontmatter.img1}/>
        <img className={styles.funnyImg} src={frontmatter.img2}/>
      </div>
    </div>
  )
}