import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client'; //hace un GET, o llamada tipo query

const LinkList = () => {
    const FEED_QUERY = gql`
        query {
            links {
                url
                description
            }
        }
    `; 

    const { data } = useQuery(FEED_QUERY);

    return (
      <div>
        {data && (
          <>
            {data.links.map((link) => (
              <Link key={link.id} link={link} />
            ))}
          </>
        )}
      </div>
    );
};

export default LinkList;