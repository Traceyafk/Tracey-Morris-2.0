import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost1 = ({ data }) => {
    const { title } = data.contentfulBlogPost1;

    return (
        <Layout>
            <h1>{title}</h1>
        </Layout>
    )
}

export default BlogPost1;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost1(slug: {eq: $slug}) {
            title
            slug
        }
    }
`