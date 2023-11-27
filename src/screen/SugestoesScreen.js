import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { IconButton } from "react-native-paper";
  
  const SugestoesScreen = () => {
    const [sugestao, setSugestao] = useState("");
    const [sugestaoList, setSugestaoList] = useState([]);
  
    const handleAddSugestao = () => {
      if (sugestao === "") {
        return;
      }
      setSugestaoList([...sugestaoList, { id: Date.now().toString(), title: sugestao }]);
      setSugestao("");
    };
  
    const handleDeleteSugestao = (id) => {
      const updatedSugestaoList = sugestaoList.filter((sugestao) => sugestao.id !== id);
      setSugestaoList(updatedSugestaoList);
    };
  
    const renderSugestao = ({ item }) => {
      return (
        <View style={styles.card}>
            <Text style={styles.textCard}>{item.title}</Text>
            <IconButton
              icon="trash-can"
              iconColor="#000000"
              onPress={() => handleDeleteSugestao(item.id)}
            />
         
        </View>
      );
    };
    return (
        <View style={styles.container}>
          <View style={styles.containerLogo}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={styles.title}>Sugestões da Comunidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Escreva uma sugestão"
              value={sugestao}
              onChangeText={(userText) => setSugestao(userText)}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleAddSugestao()}>
              <Text style={styles.buttonText}>Cadastrar sugestão</Text>
            </TouchableOpacity>
            <FlatList data={sugestaoList} renderItem={renderSugestao} />
          </View>
        </View>
    );
  };
  
  export default SugestoesScreen;
  
  const styles = StyleSheet.create({
    button:{
      backgroundColor: "#4FA4D1",
      borderRadius: 25,
      paddingVertical: 10,
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
    },
    buttonText:{
      color: "#FFFFFF", 
      fontWeight: "bold",
      fontSize: 16
    },
    card:{
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      paddingHorizontal: 6,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
      width: 310
    },
    container:{
      flex: 1,
      marginHorizontal: 16, 
      marginTop: 40,
    },
    containerLogo:{
      flex: 1
    },
    containerForm:{
      flex: 3
    },
    image:{
      width: '100%',
      height: '100%'
    },
    input:{
      marginTop: 20,
      backgroundColor: "#FFFFFF",
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    textCard:{
      color: "#000000", 
      fontSize: 16, 
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      width: 235

    },
    title:{
      marginTop: 20,
      color: "#FFFFFF", 
      fontWeight: "bold",
      fontSize: 24
    }
  });