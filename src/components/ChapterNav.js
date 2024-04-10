import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ChapterNav = () => {
  const data = useStaticQuery(graphql`
    query QueryChaptersLink {
      allBookSection {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <nav className="py-6">
      <ul className="space-y-1">
        {data.allBookSection.edges.map(({ node }) => {
          return (
            <li key={node.slug}>
              <Link
                to={`/${node.slug}/`}
                className="block px-3 py-1 font-semibold hover:underline"
                activeClassName="bg-gray-100 rounded-l"
              >
                {node.title}
              </Link>
            </li>
          );
        })}

        <li key="examples">
          <Link
            to={`/examples/`}
            className="block px-3 py-1 font-semibold hover:underline"
            activeClassName="bg-gray-100 rounded-l"
          >
            Examples
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ChapterNav;
