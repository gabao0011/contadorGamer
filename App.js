//✋😜🤚
//Importa o React e o useState
//useState serve para criar valores que podem mudar na tela
import React, {useState} from "react";

//Importa os componentes do React Native
import { 
  View, //Área de tela
  Text, //Texto
  Button, //Botão
  StyleSheet, //Estilos
  TouchableOpacity //Botão customizável
  } from "react-native-web";

//Componente principal do app
export default function App(){
  //Cria a estado (variavel) pontos e a função setPontos para alterar o valor
  //0 é o valor inicial
  const [pontos,setPontos] = useState(0);
//Função para aumentar 1 ponto
function aumentar(){
  //pega o valor atual e soma +1
  setPontos(pontos+1);
}
//Função para diminuir 1 ponto
function diminuir(){
  //pega o valor atual e subtrai -1
  setPontos(pontos-1);
}
//Função para resetar o contador
function reset(){
  //volta o valor para 0
  setPontos(0);
}
//Tudo que está no return é o que aparece na tela
  return(
    //View principal do app
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
      {/* Mostra o valor atual dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text>
      {/* Área dos botões */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
      {/* Botão reset */}
      <TouchableOpacity onPress={reset} style={styles.botaoReset}>
          <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>
    </View>
  );
}
//Estilos do app
const styles = StyleSheet.create({
  //Estilo da tela principal
  container:{
    //Ocupar toda a tela
    flex:1,
    //Cor de fundo
    backgroundColor:'#121212',
    //Centralizar horizontalmente
    alignItems:'center',
    //Centralizar verticalmente
    justifyContent:'center',
    //Espaçamento interno
    padding:20
  },
//Estilo do título
  titulo:{
    //Tamanho da fonte
    fontSize:32,
    //Cor do texto
    color:'#00ff88',
    //Negrito
    fontWeight:'bold',
    //Espaçamento abaixo
    marginBottom:30,
  },
  //Estilo dos pontos
  pontos:{
    //Tamanho da fonte
    fontSize:80,
    //Cor do texto  
    color:'#ffffff',
    //Espaçamento abaixo
    marginBottom:40,
    //Negrito
    fontWeight:'bold',
  },
  //Estilo da área dos botões
  areaBotoes:{
    //Organizar os botões em linha
    flexDirection:'row',
    //Espaçamento abaixo
    marginBottom:20,
  },
  //Estilo dos botões
  botao:{
    //Cor de fundo
    backgroundColor:'#00ff88',
    //Espaçamento interno vertical
    paddingVertical:15,
    //Espaçamento interno horizontal
    paddingHorizontal:30,
    //Bordas arredondadas
    borderRadius:12,
    //Espaçamento horizontal entre os botões
    marginHorizontal:10,
  },
  //Estilo do botão reset
  botaoReset:{
    //Cor de fundo
    backgroundColor:'#ff3b30',
    //Espaçamento interno vertical
    paddingVertical:15,
    //Espaçamento interno horizontal
    paddingHorizontal:40,
    //Bordas arredondadas
    borderRadius:12,
  },
  //Estilo do texto dos botões
  textoBotao:{
    //Tamanho da fonte
    fontSize:22,
    //Cor do texto
    color:'#000',
    //Negrito
    fontWeight:'bold',
  }
});