import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'

const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  )
}

export default Detail