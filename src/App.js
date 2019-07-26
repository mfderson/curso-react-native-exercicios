import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { InverterSemDefault } from './components/Multi'
import InverterComDefault from './components/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexível!!!'/>
        <ParImpar numero={31}></ParImpar>
        <InverterSemDefault texto='Sem Default!!!'/>
        <InverterComDefault texto='Com Default!!!'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})