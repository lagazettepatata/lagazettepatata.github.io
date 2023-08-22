import Image from 'next/image'
import React, { useCallback } from 'react'
import path from 'path'
import useEmblaCarousel from 'embla-carousel-react'
import Post from '@components/Post'
import Funny from '@components/Funny'
import { getPostsData } from '../lib/posts';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const funnyDirectory = path.join(process.cwd(), 'funny');
  
  const posts = getPostsData(postsDirectory);
  const funny = getPostsData(funnyDirectory);
  return {
    props: {
      posts,
      funny
    },
  };
}

export default function Home({ posts, funny }) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="container">
              <main>
                <Image
                  src="/cover.jpeg"
                  layout="fill"
                  // objectFit="cover"
                  objectPosition="center"
                  alt="La Gazette Patata"
                />
              </main>
            </div>
          </div>
          {posts.map(post => (
            <div key={post.id} className="embla__slide">
              <Post frontmatter={post.frontmatter} markdown={post.content}></Post>
            </div>
          ))}
          {funny.map(fun => (
            <div key={fun.id} className="embla__slide">
              <Funny frontmatter={fun.frontmatter} markdown={fun.content}></Funny>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
