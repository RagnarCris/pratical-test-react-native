import { Text, View, Image, SectionList, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';
import BookItem from '../Components/BookItem';
import CategoryItem from '../Components/CategoryItem';
import { Searchbar } from 'react-native-paper';


const Home = ({ navigation }) => {
  const [carregando,setCarregando]=useState(true)
  const [livros,setLivros]=useState([])
  const [categorias,setCategorias]=useState([])
  const [pesquisa, setPesquisa] = useState('');
  const [pesquisando, setPesquisando] = useState(false);
  
  const APIKEY = "UXh26tMQFKjgsrHicJxIp1NhAAax7GaO" //Minha api-key
  //const APIKEY = "vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR" //api-key do projeto

  useEffect(
      ()=>{
          Promise.all([
              fetch("https://api.nytimes.com/svc/books/v3/lists/names.json\?api-key\="+APIKEY),
              fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json\?api-key\="+APIKEY),
            ])
              .then(respostas =>
                  Promise.all(respostas.map(resposta => resposta.json()))
              )
              .then( dados => {
                  const json_categorias = dados[0];
                  const json_completo = dados[1];
                  const resultados = json_completo.results;
                  const lista_livros = resultados.lists;
                  const livros_aux = []
                  // Separa 5 livros para as seções "Para você" e "Os mais lidos da semana"
                  for (var i = 0; i < 5; i++){
                      let item = lista_livros[i]
                      livros_aux.push(...item.books);
                  }
                  setCategorias(json_categorias.results);
                  setLivros(livros_aux)})
              .catch((e)=>(console.log(e)))
              .finally(()=>setCarregando(false))
      },[]
  )

  const realizandoPesquisa = consulta => {
    setPesquisa(consulta);
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
          onChangeText={realizandoPesquisa}
          value={pesquisa}
        />
        </View>
        {
        carregando ?
        <View style={{alignItems: "center", justifyContent: "center"}}>
        <ActivityIndicator size="large" color="#8B008B" />
        <Text> Buscando Dados </Text>
        </View>
        :(
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={[
          { title: 'Para Você', data: livros },
          { title: 'Categorias', data: categorias },
          { title: 'Os mais lidos da semana', data: livros}
          ]}
          renderSectionHeader={({ section }) => {
            if(section.title === 'Categorias'){
              return(
                <View>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <FlatList
                        horizontal
                        data={section.data}
                        keyExtractor={({id},index)=>index}
                        renderItem={({ item }) => {
                            <TouchableOpacity onPress={() => navigation.navigate('Category', {item})}>
                                <CategoryItem categoria={item.display_name}/>
                            </TouchableOpacity>
                        }}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
              );  
            }
            console.log(section.data)
            return(
                <View>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                    <FlatList
                        horizontal
                        data={section.data}
                        keyExtractor={({id},index)=>index}
                        renderItem={({ item }) => {
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
                            <BookItem imagem={item.book_image} titulo={item.title} autor={item.author} />
                        </TouchableOpacity>
                    }}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            );
          }}
          renderItem={({ item, section }) => {
              return null;
          }}
        />
        )}
    </View>
  )
}

export default Home