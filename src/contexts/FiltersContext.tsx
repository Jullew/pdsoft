import React, {createContext, useContext, useEffect, useState} from 'react';
import {fetchAllFilters} from '../services/charactersService';

interface FiltersContextType {
  filters: {category: string; items: string[]}[] | null;
  isLoading: boolean;
  error: string | null;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [filters, setFilters] = useState<
    {category: string; items: string[]}[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeFilters = async () => {
      try {
        const data = await fetchAllFilters();
        setFilters(data);
      } catch (err) {
        setError('Error fetching filters.');
      } finally {
        setIsLoading(false);
      }
    };

    initializeFilters();
  }, []);

  return (
    <FiltersContext.Provider value={{filters, isLoading, error}}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
