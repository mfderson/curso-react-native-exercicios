import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../style/Padrao'

function parOuImpar(numero) {
  // if (numero % 2 == 0)
  //   return <Text style={Padrao.ex}>Par</Text>
  // else
  //   return <Text style={Padrao.ex}>Impar</Text>
  const v = numero % 2 == 0 ? 'Par' : 'Impar'
  return <Text style={Padrao.ex}>{v}</Text>
}

export default props => 
  <View>
    {parOuImpar(props.numero)}
  </View>

// Pode-se fazer assim diretamente
// export default props => 
//   <View>
//     {
//       props.numero % 2 == 0
//       ? <Text style={Padrao.ex}>Par</Text>
//       : <Text style={Padrao.ex}>Impar</Text>
//     }
//   </View>