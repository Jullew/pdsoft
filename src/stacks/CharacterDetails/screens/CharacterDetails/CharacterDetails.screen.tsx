import {Text, View, Image, Pressable, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './CharacterDetails.styled';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {
  CharacterDetailsStackNavigationProp,
  CharacterDetailsStackParamList,
} from '../../CharacterDetails.routes';
import {globalStyles} from '../../../../styles/globalStyles';
import Button from '../../../../components/Button/Button';
import {FavoritesContext} from '../../../../contexts/FavoritesContext';
import {COLORS} from '../../../../styles/theme';
import Icon from '@react-native-vector-icons/material-icons';

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

interface Props {
  route: CharacterDetailsScreenRouteProp;
}

const CharacterDetailsScreen: React.FC<Props> = ({route}) => {
  const {character} = route.params;
  const navigation = useNavigation<CharacterDetailsStackNavigationProp>();
  const {addToFavorites, removeFromFavorites, isFavorite} =
    useContext(FavoritesContext);

  const favorite = isFavorite(character.id);

  const handleLikeClick = () => {
    if (favorite) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={handleGoBack} style={styles.backContainer}>
        <Text style={[globalStyles.bodyTextSmall, styles.back]}>
          <Icon name="arrow-left" size={10} />
          Go back to Characters List
        </Text>
      </Pressable>

      <View style={styles.shadowContainer}>
        <View style={styles.shadow} />
        <View style={styles.charContainer}>
          <Image
            source={{uri: character.image}}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <View style={styles.name}>
              <Text style={globalStyles.labelSmall}>NAME</Text>
              <Text style={globalStyles.heading}>{character.name}</Text>
            </View>
            <View style={styles.details}>
              <View style={styles.detail}>
                <Text style={globalStyles.labelSmall}>STATUS</Text>
                <Text style={globalStyles.bodyText}>{character.status}</Text>
              </View>
              <View style={styles.detail}>
                <Text style={globalStyles.labelSmall}>ORIGIN</Text>
                <Text style={globalStyles.bodyText}>
                  {character.origin?.name}
                </Text>
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.detail}>
                <Text style={globalStyles.labelSmall}>SPECIES</Text>
                <Text style={globalStyles.bodyText}>{character.species}</Text>
              </View>
              <View style={styles.detail}>
                <Text style={globalStyles.labelSmall}>GENDER</Text>
                <Text style={globalStyles.bodyText}>{character.gender}</Text>
              </View>
            </View>
            {character.type !== '' && (
              <View style={styles.details}>
                <View style={styles.detail}>
                  <Text style={globalStyles.labelSmall}>TYPE</Text>
                  <Text style={globalStyles.bodyText}>{character.type}</Text>
                </View>
              </View>
            )}
          </View>
          <Button
            onPress={handleLikeClick}
            text={favorite ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
            iconColor={favorite ? COLORS.fav : '#ffffff'}
            iconName={favorite ? 'star' : 'star-outline'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
