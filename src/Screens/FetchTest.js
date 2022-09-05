import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';

export default function (){

    const [carregando,setCarregando]=useState(true)
    const [livros,setLivros]=useState([])
    const [categorias,setCategorias]=useState([])
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
                    setCategorias(json_categorias.results);
                    const resultados = json_completo.results;
                    const lista_livros = resultados.lists;
                    const livros_aux = []
                    // Separa 10 livros para as seções "Para você" e "Os mais lidos da semana"
                    for (var i = 0; i < 10; i++){
                        let item = lista_livros[i]
                        livros_aux.push(...item.books);
                    }
                    setLivros(livros_aux)})
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
                    <View>
                    <Text>LIVROS</Text>
                    <FlatList
                        data={livros}
                        keyExtractor={({id},index)=>index}
                        renderItem={({item})=>(
                            <Text>{item.title.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();})}</Text>
                        )}
                    />
                    <Text>CATEGORIAS</Text>
                    <FlatList
                        data={categorias}
                        keyExtractor={({id},index)=>index}
                        renderItem={({item})=>(
                        <Text>{item.display_name}</Text>
                        )}
                    />
                    </View>
                )
            }
         </View>
    )
}