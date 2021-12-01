import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import Picker from '../components/Picker';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaCoin}>
        <Text style={styles.title}>Selecione sua moeda</Text>

        <Picker />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#101215',
    paddingTop: 40
  },
});
