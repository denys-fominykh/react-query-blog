import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { API_HANDLERS } from 'api/apiHandlers';
import { Loader } from 'components/Loader';
import { QUERY_KEYS } from 'constants/queryKeys';
import { ItemsList, PageHeader } from 'pages/People/styled';

export function People(): JSX.Element {
  const { isLoading, error, data } = useQuery(
    QUERY_KEYS.PEOPLE.ALL_CHARACTERS,
    API_HANDLERS.PEOPLE.ALL_CHARACTERS,
  );

  return (
    <>
      <PageHeader>
        <h1>People</h1>
      </PageHeader>
      <ItemsList>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <h1>An error has occurred: ${error}</h1>
        ) : (
          data?.data?.results.map(({ name, birth_year: birthYear }, idx) => (
            <Link key={idx} to={`/people/${idx + 1}`}>
              <li>
                <h3>{name}</h3>
                Birth year: {birthYear}
              </li>
            </Link>
          ))
        )}
      </ItemsList>
    </>
  );
}
