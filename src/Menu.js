import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { InverterSemDefault } from './components/Multi'
import InverterComDefault from './components/Multi'
import Contador from './components/Contador'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/LIstaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
  
  Flex: {
    screen: Flex,
    navigationOptions: {title: 'Flex'}
  },
  ListaFlex: {
    screen: ListaFlex,
    navigationOptions: {title: 'Lista Flex'}
  },
  TextoSincronizado: {
    screen: TextoSincronizado,
    navigationOptions: {title: 'Texto Sincronizado'}
  },
  Avo: {
    screen: () => <Avo nome='João' sobrenome='Silva' />
  },
  Evento: {
    screen: Evento
  },
  ValidarProps: {
    screen: () => <ValidarProps ano={18} />
  },
  Contador: {
    screen: () => <Contador numeroInicial={100}/>
  },
  InverterComDefault: {
    screen: () => <InverterComDefault texto='React Native!!!' />
  },
  ParImpar: {
    screen: () => <ParImpar numero={30} />,
    navigationOptions: { title: 'Par & Ímpar'}
  },
  Simples: {
    screen: () => <Simples texto='Flexível' />
  }
}, { drawerWidth: 300 })
