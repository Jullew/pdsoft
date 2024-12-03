import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import {COLORS} from '../../styles/theme';
import Icon from '@react-native-vector-icons/material-icons';
import {sH, sW} from '../../styles/responsive';

const Tab = createBottomTabNavigator();

export const TabNavigationStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: COLORS.greyshGreen,
        tabBarIcon: ({color, size}) => {
          let iconName: string;

          if (route.name === 'ALL CHARACTERS') {
            iconName = 'person';
          } else if (route.name === 'FAVORITES') {
            iconName = 'star';
          } else {
            iconName = 'menu';
          }

          return (
            <View>
              <Icon name={iconName as any} size={size} color={color} />
            </View>
          );
        },
        tabBarLabel: ({focused, color}) => (
          <View style={focused ? styles.activeLabel : styles.inactiveLabel}>
            <View style={{flex: 1}}>
              <Text style={{color, fontSize: 12}}>{route.name}</Text>
            </View>
          </View>
        ),
      })}>
      <Tab.Screen name="ALL CHARACTERS" component={CharacterListScreen} />
      <Tab.Screen name="FAVORITES" component={FavoriteCharactersScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.darkGreen,
    paddingBottom: 5,
    paddingTop: 0,
    height: sH(70),
  },
  activeTab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ffffff',
    paddingBottom: 5,
  },
  inactiveTab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: sW(5),
  },
  activeLabel: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    paddingBottom: 2,
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  inactiveLabel: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryGreen,
    paddingBottom: 2,
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});
