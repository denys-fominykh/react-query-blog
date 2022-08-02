import { AxiosResponse } from 'axios';

export type AxiosResponseSuccess<Data> = Promise<AxiosResponse<Data>>;
