import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {styles} from './Filters.styled';
import {globalStyles} from '../../styles/globalStyles';
import Icon from '@react-native-vector-icons/material-icons';
import Button from '../Button/Button';
import {sW} from '../../styles/responsive';
import {COLORS} from '../../styles/theme';

type FilterKeys = 'status' | 'species' | 'gender' | 'type';

interface FiltersProps {
  data: {category: string; items: string[]}[];
  initialFilters: Partial<Record<FilterKeys, string | null>>;
  onApply: (filters: Partial<Record<FilterKeys, string | null>>) => void;
  onReset: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  data,
  initialFilters,
  onApply,
  onReset,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Partial<Record<FilterKeys, string | null>>
  >({});

  useEffect(() => {
    setSelectedFilters(initialFilters);
  }, [initialFilters]);

  const toggleCheckbox = (category: FilterKeys, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  const renderCategory = ({
    item,
  }: {
    item: {category: string; items: string[]};
  }) => (
    <View style={styles.groupContainer}>
      <Text style={globalStyles.labelMedium}>
        {item.category.toUpperCase()}
      </Text>
      {item.items.map(filterItem => (
        <Pressable
          key={filterItem}
          onPress={() =>
            toggleCheckbox(
              item.category.toLowerCase() as FilterKeys,
              filterItem,
            )
          }
          style={globalStyles.checkboxRow}>
          <View
            style={[
              globalStyles.checkboxContainer,
              selectedFilters[item.category.toLowerCase() as FilterKeys] ===
                filterItem && globalStyles.checkboxActive,
            ]}>
            {selectedFilters[item.category.toLowerCase() as FilterKeys] ===
              filterItem && (
              <Icon
                name="check"
                color="#ffffff"
                style={globalStyles.checkboxIcon}
              />
            )}
          </View>
          <Text style={globalStyles.bodyText}>{filterItem}</Text>
        </Pressable>
      ))}
    </View>
  );

  return (
    <View style={styles.filterContainer}>
      <FlatList
        data={data}
        renderItem={renderCategory}
        keyExtractor={item => item.category}
        contentContainerStyle={{gap: sW(24)}}
      />
      <View style={styles.buttonContainer}>
        <Button
          text="RESET"
          textColor={COLORS.primaryGreen}
          outline={true}
          onPress={() => {
            setSelectedFilters({});
            onReset();
          }}
        />
        <Button
          text="APPLY"
          onPress={() => {
            onApply(selectedFilters);
          }}
        />
      </View>
    </View>
  );
};

export default Filters;
