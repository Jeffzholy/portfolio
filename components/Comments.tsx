import React from 'react'
import Giscus from '@giscus/react'

export function Comments() {
  return (
    <Giscus
      id="comments"
      repo="Jeffzholy/portfolio"
      repoId="R_kgDOJhKHhg"
      category="Announcements"
      categoryId="DIC_kwDOJhKHhs4CXDNE"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  )
}
