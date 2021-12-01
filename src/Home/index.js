import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import Picker from '../components/Picker';

import api from '../services/api';

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [coinSelected, setCoinSelected] = useState(null);
  const [coinValue, setCoinValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCoins(){
      const response = await api.get('all');

      let arrayCoins = []

      //func JS para transformar tudo dentro em arrays
      Object.keys(response.data).map((key) => {
        arrayCoins.push({
          key: key,
          label: key,
          value: key
        })
      }) // .map vai percorrer por todas as keys

      setCoins(arrayCoins);
      setLoading(false);
    }

    loadCoins();
  }, []);

  if(loading){
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator color="#FFFFFF" size={45} />
      </View>
    )
  }else{
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.areaCoin}>
          <Text style={styles.title}>Selecione sua moeda</Text>
  
          <Picker 
            coins={coins}
            onChange={(coin) => setCoinSelected(coin)}  
          />
        </View>
  
        <View style={styles.areaValue}>
          <Text style={styles.title}>Digite um valor para converter em (R$)</Text>
          <TextInput 
            style={styles.input}
            placeholder="Ex: R$ 150,00"
            keyboardType="numeric"
            onChangeText={(value) => setCoinValue(value)}
          />
        </View>
  
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
  
        <View style={styles.areaResult}>
          <Text style={styles.valor}>3 USD</Text>
          <Text style={[styles.valor, {fontSize: 18, margin: 15}]}>Corresponde a</Text>
          <Text style={styles.valor}>R$ 15,90</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#101215',
    paddingTop: 40
  },
  areaCoin: {
    width: '90%',
    height: 100,
    backgroundColor: '#F9F9F9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    paddingLeft: 20,
    marginBottom: 1
  },
  title: {
    fontSize: 15,
    color: '#000000',
    paddingTop: 15,
    paddingLeft: 5,
    marginBottom: 15,
  },
  areaValue: {
    width: '90%',
    height: 140,
    backgroundColor: '#F9F9F9',
    paddingBottom: 9,
    paddingTop: 9
  },
  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 9,
    color: '#000000'
  },
  button: {
    width: '90%',
    backgroundColor: '#FB4B57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  textButton: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  areaResult: {
    width: '90%',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    padding: 25,
    borderRadius: 9
  },
  valor: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000000'
  }
});
