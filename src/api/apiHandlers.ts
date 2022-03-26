import { API_PATHS } from 'api/apiPaths';
import { getData } from 'api/crudHandlers';
import {
  AxiosResponseSuccess,
  GetPeopleResponseSuccess,
  GetCharacterResponseSuccess,
} from 'api/types';

export const API_HANDLERS = {
  PEOPLE: {
    ALL_CHARACTERS(): AxiosResponseSuccess<GetPeopleResponseSuccess> {
      return getData<GetPeopleResponseSuccess>(API_PATHS.PEOPLE._);
    },
    CHARACTER_BY_ID(id: string): AxiosResponseSuccess<GetCharacterResponseSuccess> {
      return getData<GetCharacterResponseSuccess>(API_PATHS.PEOPLE.BY_ID(id));
    },
  },
};
