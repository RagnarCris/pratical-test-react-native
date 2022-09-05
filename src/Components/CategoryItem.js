import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles';

const CategoryItem = ({ categoria }) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.square}/>
      <Text numberOfLines={2} style={styles.bookItemTitle}>{ categoria }</Text>
    </View>
  )
}

export default CategoryItem