import axiosInstance from '../utils/axios';
import {Character} from '../types/characters.types';

export interface FetchCharactersParams {
  name?: string;
  page: number;
  status?: string;
  species?: string;
  gender?: string;
  type?: string;
}

export interface FetchCharactersResponse {
  results: Character[];
  info: {
    pages: number;
  };
}

export const fetchCharacters = async (params: FetchCharactersParams) => {
  const {
    name = '',
    page,
    status = '',
    species = '',
    gender = '',
    type = '',
  } = params;
  const response = await axiosInstance.get<FetchCharactersResponse>(
    '/character',
    {
      params: {
        name,
        page,
        status,
        species,
        gender,
        type,
      },
    },
  );
  return response.data;
};

export const fetchAllFilters = async () => {
  let page = 1;
  let hasMorePages = true;
  const species = new Set<string>();
  const types = new Set<string>();
  const statuses = new Set<string>();
  const gender = new Set<string>();

  while (hasMorePages) {
    const response = await axiosInstance.get<FetchCharactersResponse>(
      '/character',
      {
        params: {page},
      },
    );
    const data = response.data;

    data.results.forEach((character: Character) => {
      species.add(character.species || 'Unknown');
      types.add(character.type || 'Unknown');
      statuses.add(character.status || 'Unknown');
      gender.add(character.gender || 'Unknown');
    });

    hasMorePages = page < data.info.pages;
    page += 1;
  }

  return [
    {category: 'Status', items: Array.from(statuses).sort()},
    {category: 'Gender', items: Array.from(gender).sort()},
    {category: 'Species', items: Array.from(species).sort()},
    {category: 'Type', items: Array.from(types).sort()},
  ];
};
