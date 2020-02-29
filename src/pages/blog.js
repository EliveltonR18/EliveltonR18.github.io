import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { Header } from '../components/theme';

const postQuery = graphql`
  {
    allMarkdownRemark{
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default () => (
  <Layout>
    <Header />
    <SEO />
    <h1>Blog</h1>
    <StaticQuery query={postQuery} render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <div>
                  <h4>{node.frontmatter.title}</h4>
                </div>
              )
            })}
          </div>
        )
      }} 
    />
  </Layout>
);
