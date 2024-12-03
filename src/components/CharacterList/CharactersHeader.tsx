import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './CharactersHeader.styled';
import {globalStyles} from '../../styles/globalStyles';
import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';
import {sW} from '../../styles/responsive';
import {COLORS} from '../../styles/theme';
import Filters from '../Filters/Filters';
import {useCharacters} from '../../hooks/useCharacters';

interface CharactersHeaderProps {
  title?: string;
  searchQuery?: string;
  setSearchQuery: (query: string) => void;
  setFilters: (
    filters: Partial<{
      status?: string;
      species?: string;
      gender?: string;
      type?: string;
    }>,
  ) => void;
  currentFilters: {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    type?: string;
  };
}

const CharactersHeader: React.FC<CharactersHeaderProps> = ({
  title = 'Characters',
  setSearchQuery,
  setFilters,
  currentFilters,
}) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const {rickAndMortyData, setPage} = useCharacters();

  const [localFilters, setLocalFilters] = useState<{
    status?: string | null;
    species?: string | null;
    gender?: string | null;
    type?: string | null;
  }>({});

  useEffect(() => {
    setLocalFilters({
      status: currentFilters.status || null,
      species: currentFilters.species || null,
      gender: currentFilters.gender || null,
      type: currentFilters.type || null,
    });
  }, [currentFilters]);

  const toggleFilter = () => {
    setIsFilterVisible(prev => !prev);
  };

  const applyFilters = (filters: {
    status?: string | null;
    species?: string | null;
    gender?: string | null;
    type?: string | null;
  }) => {
    setPage(1);
    setFilters({
      ...filters,
    });
    setIsFilterVisible(false);
  };

  const resetFilters = () => {
    setPage(1);
    setLocalFilters({
      status: null,
      species: null,
      gender: null,
      type: null,
    });
    setFilters({
      status: null,
      species: null,
      gender: null,
      type: null,
    });
    setIsFilterVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>{title}</Text>
      <SearchInput
        placeholder="Search the characters"
        onSearch={setSearchQuery}
        value={currentFilters.name || ''}
      />
      <Pressable style={styles.filterButtonContainer}>
        <Button
          onPress={toggleFilter}
          text="FILTER"
          iconSide="right"
          outline={false}
          iconName={
            isFilterVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
          }
          iconSize={sW(16)}
          styles={{
            backgroundColor: isFilterVisible
              ? COLORS.darkGreen
              : COLORS.primaryGreen,
          }}
        />
      </Pressable>
      {isFilterVisible && rickAndMortyData && (
        <View style={styles.shadowContainer}>
          <View style={styles.shadowLayer} />
          <Filters
            data={rickAndMortyData}
            initialFilters={localFilters}
            onApply={applyFilters}
            onReset={resetFilters}
          />
        </View>
      )}
    </View>
  );
};

export default CharactersHeader;
