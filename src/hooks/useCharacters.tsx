import {useState, useEffect, useCallback} from 'react';
import {fetchCharacters} from '../services/charactersService';
import {Character} from '../types/characters.types';
import {useFilters} from '../contexts/FiltersContext';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    type?: string;
  }>({});

  const {
    filters: rickAndMortyData,
    isLoading: filtersLoading,
    error: filtersError,
  } = useFilters();

  const fetchMoreCharacters = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchCharacters({page, ...filters});
      setCharacters(prev => [...prev, ...data.results]);
      setHasMorePages(page < data.info.pages);
      setPage(prev => prev + 1);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error fetching data.');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMorePages, filters, page]);

  useEffect(() => {
    setCharacters([]);
    setPage(1);
    setHasMorePages(true);
    fetchMoreCharacters();
  }, [filters]);

  const setSearchQuery = useCallback((query: string) => {
    setPage(1);
    setFilters(prev => ({
      ...prev,
      name: query || undefined,
    }));
  }, []);

  return {
    characters,
    isLoading,
    filters,
    error,
    hasMorePages,
    setPage,
    rickAndMortyData,
    filtersLoading,
    filtersError,
    setFilters,
    fetchMoreCharacters,
    setSearchQuery,
  };
};
