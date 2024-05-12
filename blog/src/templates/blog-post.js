import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { H1 } from '../components/Heading'

const BlogPost1 = ({ data }) => {
    const { title, body } = data.contentfulBlogPost1;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default BlogPost1;

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
  contentfulBlogPost1(slug: {eq: $slug}) {
    title
    slug
    body {
      childMarkdownRemark {
        html
      }
    }
    heroImage {
                gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 960
                )
            }
	    }
    }
`