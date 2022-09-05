import { Text, View, Image, SectionList, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';
import BookItem from '../Components/BookItem';
import CategoryItem from '../Components/CategoryItem';
import { Searchbar } from 'react-native-paper';


const Home = ({ navigation }) => {
  const [livros, setLivros] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [pesquisando, setPesquisando] = useState(false);

  const onChangeSearch = query => {
    setPesquisa(query);
  };

  useEffect(() => {pesquisa === '' ? setPesquisando(false) : setPesquisando(true)},[pesquisa])

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{
          backgroundColor: '#FFFFFF',
          borderColor: 'black',
          borderBottomWidth: 1,
          marginBottom: 25,
          opacity: pesquisando
          ? 1
          : 0.6,
          borderRadius: 5
        }}>
        <Searchbar
          style={styles.searchBar}
          inputStyle={styles.searchBarInput}
          elevation='0'
          placeholder="Desabilitado"
          onChangeText={onChangeSearch}
          value={pesquisa}
        />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <BookItem imagem={require("../assets/perfil.png")} titulo="Título da obra das obras" autor="Cristiano Nascimento" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <CategoryItem categoria="Hardcover Political Books"/>
    </View>
  )
}

export default Home