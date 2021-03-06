import React from 'react'
import { Text } from 'react-native'
import Padrao from '../style/Padrao'

export default props => <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>

// ERROR!!!
// export default props => 
//   <Text>{props.texto}</Text>
//   <Text>{props.texto}</Text>

// export default function(props) {
//   return <Text>{props.texto}</Text>
// }

// Correto
// export default props => { 
//   return <Text>{props.texto}</Text>
// }

// Correto
// export default props => <Text>{props.texto}</Text>

// Correto
// export default props => 
//   <View>
//     <Text>{props.texto}</Text>
//     <Text>{props.texto}</Text>
//   </View>

// Correto
// export default props => [
//   <Text key={1}>Arrow 1: {props.texto}</Text>,
//   <Text key={2}>Arrow 2: {props.texto}</Text>
// ]
