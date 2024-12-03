import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useCharacters} from '../../../../hooks/useCharacters';
import CharactersHeader from '../../../../components/CharacterList/CharactersHeader';
import CharactersCard from '../../../../components/CharacterList/CharactersCard';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useNavigation} from '@react-navigation/native';
import {styles} from './CharacterList.styled';
import {COLORS} from '../../../../styles/theme';
import {sH} from '../../../../styles/responsive';
import {Character} from '../../../../types/characters.types';
import NotificationBar from '../../../../components/Notifications/NotificationBar';

const CharacterListScreen: React.FC = () => {
  const {
    characters,
    isLoading,
    error,
    hasMorePages,
    setFilters,
    fetchMoreCharacters,
    filters,
    setSearchQuery,
  } = useCharacters();
  const {navigate} = useNavigation<MainStackNavigationProp>();

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

  const renderContent = () => {
    if (isLoading && characters.length === 0 && !error) {
      return <ActivityIndicator size="large" color={COLORS.primaryGreen} />;
    }
    if (characters.length === 0) {
      return (
        <NotificationBar
          text="No characters match your criteria."
          iconName="info"
          color={COLORS.primaryGreen}
        />
      );
    }

    return (
      <FlatList
        data={characters}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderCharacterCard}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          if (!isLoading && hasMorePages) {
            fetchMoreCharacters();
          }
        }}
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
    );
  };

  return (
    <View style={styles.container}>
      <CharactersHeader
        title="Characters"
        setSearchQuery={setSearchQuery}
        setFilters={newFilters =>
          setFilters(prev => ({...prev, ...newFilters}))
        }
        currentFilters={filters}
      />
      <View style={styles.charactersList}>
        {error && (
          <NotificationBar text={error} color="#ff0000" iconName="error" />
        )}
        {renderContent()}
      </View>
    </View>
  );
};

export default CharacterListScreen;
