import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharacterDetailsStack} from '../CharacterDetails';
import {TabNavigationStack} from '../TabNavigation';
import {MainStackRoutes} from './Main.routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles/theme';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabNavigatorContainer}>
        <Tab.Navigator>
          <Tab.Screen
            name={MainStackRoutes.TabNavigationStack}
            component={TabNavigationStack}
            options={{header: () => <Header />}}
          />
          <Tab.Screen
            name={MainStackRoutes.CharacterDetailsStack}
            component={CharacterDetailsStack}
            options={{header: () => <Header />}}
          />
        </Tab.Navigator>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  tabNavigatorContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGreen,
  },
});
