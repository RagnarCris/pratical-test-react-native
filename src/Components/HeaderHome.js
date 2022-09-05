import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../styles';

const HeaderHome = () => {
  return (
    <View style={styles.headerView}>
      <Text style={ styles.headerTitle }>Bookshelf</Text>
      <Image 
        style={ styles.headerImage } 
        source={require("../assets/perfil.png")} 
        />
    </View>
  )
}

export default HeaderHome