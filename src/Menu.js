import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { InverterSemDefault } from './components/Multi'
import InverterComDefault from './components/Multi'
import Contador from './components/Contador'

export default createDrawerNavigator({
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
