import { Image, View, Text } from 'react-native';
import React from 'react';
import styles from '../styles';

const BookItem = ({ imagem, titulo, autor }) => {
  // Mudando de UPPER CASE pra PascalCase
  titulo = titulo.replace(/\w+/g,
  function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
  
  return (
    <View style={{flexDirection: 'column'}}>
      <Image style={styles.bookItemImage} source={{uri: imagem}}/>
      <Text numberOfLines={2} style={styles.bookItemTitle}>{ titulo }</Text>
      <Text numberOfLines={1} style={styles.bookItemAuthor}>{ autor }</Text>
      <Image style={styles.ratingImage} source={require("../assets/5-star-rating.png")}/>
    </View>
  )
}

export default BookItem