import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { API_HANDLERS } from 'api/apiHandlers';
import { Loader } from 'components/Loader';
import { QUERY_KEYS } from 'constants/queryKeys';
import { PageHeader, PageContent, ButtonReverseLink } from 'pages/People/PeopleItem/styled';

type PeopleParams = {
  itemId: string | undefined;
};

export function PeopleItem(): JSX.Element {
  const { itemId } = useParams<PeopleParams>();
  const { isLoading, error, data } = useQuery(QUERY_KEYS.PEOPLE.CHARACTER_BY_ID, () => {
    if (itemId) {
      return API_HANDLERS.PEOPLE.CHARACTER_BY_ID(itemId);
    }
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1>An error has occurred: ${error}</h1>
      ) : (
        <>
          <PageHeader>
            <h1>{data?.data?.name}</h1>
            <ButtonReverseLink to="/people">Back</ButtonReverseLink>
          </PageHeader>
          <PageContent>
            <p>Gender: {data?.data?.gender}</p>
            <p>Mass: {data?.data?.mass}</p>
            <p>Height: {data?.data?.height}</p>
            <p>Birth year: {data?.data?.birth_year}</p>
          </PageContent>
        </>
      )}
    </div>
  );
}
