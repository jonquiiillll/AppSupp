import { StyleSheet, ActivityIndicator, Card, TouchableOpacity, Buttton, Image, FlatList, Text, View, } from 'react-native'
import React, { useState, useEffect} from "react"
import FullAccountView from './FullAccountView'
const apiUrl = 'http://localhost:3000/api/v1/users'

export default AppContainer  = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(
        apiUrl,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      )

      const json = await response.json()
      setData(json.data)
    } catch (error) {
        console.error(error)
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
    {
    return (
      <View
      data={data}
      style={styles.container}>
        <Text>Team</Text>
        <Text>{data.name}</Text>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <View style={styles.card}>
              <View style={styles.userName}>
                <Image style={{height:105,width:105,  borderRadius: 100,}} source={{uri: item.avatar}} />
                <Text style={{fontSize:36, marginLeft:15,}}>{item.name}</Text>
              </View>
              <Text style={{fontSize:25, fontWeight: 'semibold', marginTop: 25, marginBottom: 10,}}>Обо мне</Text>
              <Text style={{fontSize:17, flex:1}}>{item.description}</Text>
              <Text style={{fontSize:17, flex:1}}>{item.problems}</Text>
              </View>

            )}
          />
        )}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  card: {

    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
  },
  avatar: {
    width: 40,
    hight: 40,
    resizeMode: 'contain',
  },
  userName: {
    flexDirection: 'row',
  },
})
