import Head from 'next/head'
import Image from 'next/image'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Post from '@components/Post'
import { getPostsData } from '../lib/posts';

export async function getStaticProps() {
  const posts = getPostsData();
  return {
    props: {
      posts
    },
  };
}

export default function Home({ posts }) {
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
        </div>
      </div>
    </div>
  )
}
