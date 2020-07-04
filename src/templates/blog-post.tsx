import React from "react"
import { graphql } from "gatsby"
import { SingleColumnLayout } from "../layouts"
import { BlogQuery } from "types/gatsby-graphql"

type BlogProps = {
  data: BlogQuery
}

export default function BlogPost({ data }: BlogProps) {
  const post = data.markdownRemark
  return (
    <SingleColumnLayout>
      <div>
        <h1>{post?.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.html ?? "" }} />
      </div>
    </SingleColumnLayout>
  )
}

export const query = graphql`
  query Blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
