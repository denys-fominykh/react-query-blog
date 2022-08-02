import { API_PATHS } from 'api/apiPaths';
import { getData } from 'api/crudHandlers';
import { GetPeopleResponseSuccess, GetCharacterResponseSuccess } from 'types/people';

export const API_HANDLERS = {
  PEOPLE: {
    ALL_CHARACTERS(): Promise<GetPeopleResponseSuccess> {
      return getData<GetPeopleResponseSuccess>(API_PATHS.PEOPLE._);
    },
    CHARACTER_BY_ID(id: string): Promise<GetCharacterResponseSuccess> {
      return getData<GetCharacterResponseSuccess>(API_PATHS.PEOPLE.BY_ID(id));
    },
  },
};
