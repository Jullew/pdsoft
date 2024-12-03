import {View, Text, Image, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './CharactersCard.styled';
import {Character} from '../../types/characters.types';
import {globalStyles} from '../../styles/globalStyles';
import Button from '../Button/Button';
import {COLORS} from '../../styles/theme';
import {FavoritesContext} from '../../contexts/FavoritesContext';

interface CharactersCardProps {
  character: Character;
  onPress: () => void;
}

const CharactersCard: React.FC<CharactersCardProps> = ({
  character,
  onPress,
}) => {
  const {id, name, status, species, image} = character;

  const {addToFavorites, removeFromFavorites, isFavorite} =
    useContext(FavoritesContext);

  const favorite = isFavorite(id);

  const handleLikeClick = () => {
    if (favorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(character);
    }
  };
  return (
    <Pressable onPress={onPress} style={styles.shadowContainer}>
      <View style={styles.shadowLayer} />
      <View style={styles.container} key={id}>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Text style={globalStyles.labelSmall}>NAME</Text>
            <Text style={globalStyles.bodyText}>{name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={globalStyles.labelSmall}>STATUS</Text>
            <Text style={globalStyles.bodyText}>{status}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={globalStyles.labelSmall}>SPECIES</Text>
            <Text style={globalStyles.bodyText}>{species}</Text>
          </View>
        </View>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: image}}
              style={styles.image}
              resizeMode="cover"
            />

            <Button
              onPress={handleLikeClick}
              outline={true}
              text={favorite ? 'LIKED' : 'LIKE'}
              textColor={COLORS.primaryGreen}
              iconName={favorite ? 'star' : 'star-outline'}
              iconSide="left"
              iconColor={favorite ? COLORS.fav : COLORS.primaryGreen}
              styles={styles.button}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CharactersCard;
