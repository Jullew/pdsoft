import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainStack} from './src/stacks/Main';
import {FavoritesProvider} from './src/contexts/FavoritesContext';
import {FiltersProvider} from './src/contexts/FiltersContext';

function App(): React.JSX.Element {
  return (
    <FiltersProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </FavoritesProvider>
    </FiltersProvider>
  );
}

export default App;
