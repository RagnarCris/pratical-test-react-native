import { Text, View, Image, SectionList, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';
import BookItem from '../Components/BookItem';
import CategoryItem from '../Components/CategoryItem';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <BookItem imagem={require("../assets/perfil.png")} titulo="Título da obra das obras" autor="Cristiano Nascimento" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <CategoryItem categoria="Hardcover Political Books"/>
    </View>
  )
}

export default Home