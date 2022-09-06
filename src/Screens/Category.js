import { View, Text, ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../styles';
import BookItem from '../Components/BookItem';

function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
  
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
  
    return data;
  }

const Category = ({ route, navigation }) => {
    const { item } = route.params
    const [carregando,setCarregando]=useState(true)
    const [livros,setLivros]=useState([])
    //const APIKEY = "UXh26tMQFKjgsrHicJxIp1NhAAax7GaO" //Minha api-key
    const APIKEY = "vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR" //api-key do projeto



    useEffect(
        ()=>{
            fetch("https://api.nytimes.com/svc/books/v3/lists/current/"+item.list_name_encoded+".json\?api-key\="+APIKEY)
                .then((resp)=>resp.json())
                .then((json) => {
                    const resultados = json.results;
                    setLivros(resultados.books);
                })
                .catch((e)=>(console.log(e)))
                .finally(()=>setCarregando(false))
        },[]
    )
    
    return(
         <View>
            {
                carregando ? 
                <View style={{alignItems: "center", justifyContent: "center"}}>
                <ActivityIndicator size="large" color="#8B008B" />
                <Text> Buscando Dados </Text>
                </View>
                : (
                    <SafeAreaView>
                        <FlatList
                        data={createRows(livros, 3)}
                        keyExtractor={({id},index)=>index}
                        numColumns={3}
                        renderItem={({ item }) => {
                            if (item.empty) {
                            return <View style={[styles.item, styles.itemEmpty]} />;
                            }
                            return (
                            <View style={styles.item}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                    <BookItem imagem={item.book_image} titulo={item.title} autor={item.author} />
                                </TouchableOpacity>
                            </View>
                            );
                        }}
                        />
                    </SafeAreaView>
                )
            }
         </View>
    )
}

export default Category