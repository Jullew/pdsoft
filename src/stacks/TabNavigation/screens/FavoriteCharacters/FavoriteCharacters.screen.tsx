import React, {useContext, useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {FavoritesContext} from '../../../../contexts/FavoritesContext';
import CharactersCard from '../../../../components/CharacterList/CharactersCard';
import {styles} from './FavoriteCharacters.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {Character} from '../../../../types/characters.types';
import CharactersHeader from '../../../../components/CharacterList/CharactersHeader';
import {COLORS} from '../../../../styles/theme';
import NotificationBar from '../../../../components/Notifications/NotificationBar';
import {sH} from '../../../../styles/responsive';

const FavoriteCharactersScreen: React.FC = () => {
  const {favorites} = useContext(FavoritesContext);
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState<{
    status?: string;
    species?: string;
    gender?: string;
    type?: string;
  }>({});

  const renderCharacterCard = ({item}: {item: Character}) => (
    <CharactersCard
      onPress={() =>
        navigate('CharacterDetailsStack', {
          screen: 'CharacterDetailsScreen',
          params: {character: item},
        })
      }
      character={item}
    />
  );

  const filteredFavorites = useMemo(() => {
    return favorites.filter(character => {
      const matchesSearch = character.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus = filters.status
        ? character.status.toLowerCase() === filters.status.toLowerCase()
        : true;
      const matchesSpecies = filters.species
        ? character.species.toLowerCase() === filters.species.toLowerCase()
        : true;
      const matchesGender = filters.gender
        ? character.gender.toLowerCase() === filters.gender.toLowerCase()
        : true;
      const matchesType = filters.type
        ? character.type.toLowerCase() === filters.type.toLowerCase()
        : true;
      return (
        matchesSearch &&
        matchesStatus &&
        matchesSpecies &&
        matchesGender &&
        matchesType
      );
    });
  }, [favorites, searchQuery, filters]);

  return (
    <View style={styles.container}>
      <CharactersHeader
        title="Favorite Characters"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setFilters={newFilters =>
          setFilters(prev => ({...prev, ...newFilters}))
        }
        currentFilters={filters}
      />
      <View style={styles.favsList}>
        {filteredFavorites.length === 0 ? (
          favorites.length > 0 ? (
            <NotificationBar
              text="No favorite characters match your criteria."
              color={COLORS.primaryGreen}
              iconName="info"
            />
          ) : (
            <NotificationBar
              text="You have no favorite characters."
              color={COLORS.primaryGreen}
              iconName="info"
            />
          )
        ) : (
          <FlatList
            data={filteredFavorites}
            renderItem={renderCharacterCard}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatList}
            onEndReachedThreshold={0.5}
            getItemLayout={(data, index) => ({
              length: sH(224),
              offset: sH(224) * index,
              index,
            })}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={21}
            scrollEventThrottle={16}
            keyboardShouldPersistTaps="handled"
          />
        )}
      </View>
    </View>
  );
};

export default FavoriteCharactersScreen;
