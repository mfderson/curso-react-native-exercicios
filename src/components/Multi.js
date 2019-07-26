import React from 'react'
import { Text } from 'react-native'
import Padrao from '../style/Padrao'

// A diferença é na hora de fazer o import. Dessa maneira temos que importar
// assim: import { InverterSemDefault } from bla bla bla
export const InverterSemDefault = props => {
  const inv = props.texto.split('').reverse().join('')
  return <Text style={Padrao.ex}>{inv}</Text>
}

// A diferença é na hora de fazer o import. Dessa maneira temos que importar
// assim: import InverterSemDefault from bla bla bla
export default InverterComDefault = props => {
  const inv = props.texto.split('').reverse().join('')
  return <Text style={Padrao.ex}>{inv}</Text>
}