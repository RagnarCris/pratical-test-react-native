import { View, Text, ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../styles';
import BookItem from '../Components/BookItem';

const Detail = ({ route, navigation }) => {
    const item = route.params
    const [carregando,setCarregando]=useState(true)
    const [livro,setLivro]=useState([])
    //const APIKEY = "UXh26tMQFKjgsrHicJxIp1NhAAax7GaO" //Minha api-key
    const APIKEY = "vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR" //api-key do projeto


    useEffect(
        ()=>{
            fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json\?api-key\="+APIKEY)
                .then((resp)=>resp.json())
                .then((json) => {
                  const resultados = json.results;
                  const lista_livros = resultados.lists;
                  livro_aux = lista_livros.filter(item_f => (item_f.title.toLowerCase() == item.title.toLowerCase()));
                  setLivro(livro_aux)
                  console.log(livro_aux)
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
                      <View>
                        <BookItem imagem={livro.book_image} titulo={livro.title} autor={livro.author} />
                      </View>
                    </SafeAreaView>
                )
            }
         </View>
    )
}

export default Detail