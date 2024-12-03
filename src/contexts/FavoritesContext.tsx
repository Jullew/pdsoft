import React, {createContext, useState, ReactNode, useEffect} from 'react';
import {Character} from '../types/characters.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoritesContextProps {
  favorites: Character[];
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (characterId: number) => void;
  isFavorite: (characterId: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
});

interface ProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<ProviderProps> = ({children}) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('@favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Failed to load favorites:', error);
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
      } catch (error) {
        console.error('Failed to save favorites:', error);
      }
    };

    saveFavorites();
  }, [favorites]);

  const addToFavorites = (character: Character) => {
    setFavorites(prev => [...prev, character]);
  };

  const removeFromFavorites = (characterId: number) => {
    setFavorites(prev =>
      prev.filter(character => character.id !== characterId),
    );
  };

  const isFavorite = (characterId: number) => {
    return favorites.some(character => character.id === characterId);
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};
