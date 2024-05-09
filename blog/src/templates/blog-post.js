import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost1 = ({ data }) => {
    const { title, body } = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default BlogPost1;

export const pageQuery = graphql`
    query blogPost1Query($slug: String!) {
        ContentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
	    }
    }
`

       