import React, {useState, useCallback} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {styles} from './SearchInput.styled';
import {COLORS} from '../../styles/theme';
import Icon from '@react-native-vector-icons/material-icons';
import {debounce} from 'lodash';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
  value?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  onSearch,
  value = '',
}) => {
  const [inputValue, setInputValue] = useState(value);

  const debouncedSearch = useCallback(
    debounce((text: string) => {
      if (onSearch) {
        onSearch(text);
      }
    }, 500),
    [onSearch, 500],
  );

  const handleTextChange = (text: string) => {
    setInputValue(text);
    debouncedSearch(text);
  };

  const handleClear = () => {
    setInputValue('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        placeholderTextColor={COLORS.mediumGreen}
      />
      {inputValue.length > 0 && (
        <Pressable
          onPress={handleClear}
          style={({pressed}) => [
            styles.closeContainer,
            pressed && styles.pressedCloseContainer,
          ]}>
          <Icon name="close" size={20} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchInput;
