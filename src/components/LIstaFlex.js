import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

const alunos = [
  {id: 1, nome:'Rosi', nota: 9.8},
  {id: 2, nome:'Anderson', nota: 7.8},
  {id: 3, nome:'Daniela', nota: 8.8},
  {id: 4, nome:'Camila', nota: 8.9},
  {id: 5, nome:'Edna', nota: 9.0},
  {id: 6, nome:'Marcelo', nota: 9.1},
  {id: 7, nome:'Pilantra', nota: 7.6},
  {id: 8, nome:'Peruca', nota: 5.3},
  {id: 9, nome:'Assanhada', nota: 9.9},
  {id: 10, nome:'Tokio', nota: 9.9},
  {id: 11, nome:'Professor', nota: 9.8},
  {id: 12, nome:'Inspetora', nota: 7.8},
  {id: 13, nome:'Rio', nota: 8.8},
  {id: 14, nome:'Berlim', nota: 8.9},
  {id: 15, nome:'Moscou', nota: 9.0},
  {id: 16, nome:'Denver', nota: 9.1},
  {id: 17, nome:'Nairobi', nota: 7.6},
  {id: 18, nome:'Oslo', nota: 5.3},
  {id: 19, nome:'Marsella', nota: 9.9}
]

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',

  // Propriedades do FlexBox
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

export const Aluno = props =>
  <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
  </View>

export default props => {
  const renderItem = ({item}) => {
    return <Aluno {...item} />
  }

  return (
    <ScrollView>
      <FlatList 
        data={alunos} 
        renderItem={renderItem}
        keyExtractor={(_,index) => index.toString()}>
      </FlatList>
    </ScrollView>
  )
}
