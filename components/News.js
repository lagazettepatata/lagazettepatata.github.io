import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import styles from './News.module.css'

export default function News({ frontmatter, markdown}) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <div className={styles.entry}>
        <ReactMarkdown className={styles.newsBody}>
            {frontmatter.news1}
        </ReactMarkdown>
        <img className={styles.newsImg} src={frontmatter.img1}/>
      </div>
      <div className={styles.entry}>
        <img className={styles.newsImg} src={frontmatter.img2}/>
        <ReactMarkdown className={styles.newsBody}>
            {frontmatter.news2}
        </ReactMarkdown>
      </div>
      <div className={styles.entry}>
        <ReactMarkdown className={styles.newsBody}>
            {frontmatter.news3}
        </ReactMarkdown>
        <img className={styles.newsImg} src={frontmatter.img3}/>
      </div>
      <div className={styles.entry}>
        <img className={styles.newsImg} src={frontmatter.img4}/>
        <ReactMarkdown className={styles.newsBody}>
            {frontmatter.news4}
        </ReactMarkdown>
      </div>
      <div className={styles.entry}>
        <ReactMarkdown className={styles.newsBody}>
            {frontmatter.news5}
        </ReactMarkdown>
        <img className={styles.newsImg} src={frontmatter.img5}/>
      </div>
    </div>
  )
}