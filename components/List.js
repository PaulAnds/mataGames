import React from 'react'
import { FlatList, Text } from 'react-native'

const List = ({data}) => {
  return (
    <FlatList
        data={data}
        renderItem = {({item}) => 
          <Text style={{fontSize: 20, color: (Number(item.key) % 2 == 0) ? '#9c33ff' : 'orange', textAlign: 'center'}}>{item.value}</Text>
        }
    />
  )
}



export default List;