import { StyleSheet, ActivityIndicator, Card, TouchableOpacity, Buttton, Image, FlatList, Text, View, } from 'react-native'
import React, { useState, useEffect} from "react"
const apiUrl = 'http://localhost:3000/api/v1/users'
import Header from '../components/Header'
import {NavigationContainer} from '@react-navigation/native';

export default Main = () => {
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
      <View style={styles.header}>
          <Text style={styles.texth2}>Метчи по тегам</Text>
          <View style={styles.bublesrow}>
          <View style={styles.bubles}><Text style={styles.TextBuble}>Апатия</Text></View>
          <View style={styles.bubles}><Text style={styles.TextBuble}>Стресс</Text></View>
          <View style={styles.bubles}><Text style={styles.TextBuble}>Учеба</Text></View>
          </View>
      </View>
        <Text>{data.name}</Text>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={ () => navigation.navigate('FullAccountView')}>
              <View style={styles.card}>
              <View style={styles.userName}>
                <Image style={{height:105,width:105,  borderRadius: 100,}} source={{uri: item.avatar}} />
                <Text style={{fontSize:36, marginLeft:15,}}>{item.name}</Text>
              </View>
              <Text style={{fontSize:25, fontWeight: 'semibold', marginTop: 25, marginBottom: 10,}}>Обо мне</Text>
              <Text style={{fontSize:17, flex:1}}>{item.description}</Text>
              <Text style={{fontSize:17, flex:1}}>{item.problems}</Text>

              </View>
            </TouchableOpacity >
            )}
          />
        )}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    paddingTop: 30,
  },
  card: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    marginLeft:16,
    marginRight: 16,
  },
  avatar: {
    width: 40,
    hight: 40,
    resizeMode: 'contain',
  },
  userName: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#FFFFFF',
    marginTop: -30,
    paddingLeft: 20,
    paddingTop: 35,
    height: 160,
    marginBottom:-20,
  },
  texth2: {
    flex: 1,
    fontSize:30,
    fontWeight: 'semibold',
    marginTop: 25,
    marginBottom: 10,
  },
  bubles: {
    backgroundColor: '#575757',
    height:40,
    flex: 1,
    marginRight:10,
    width:100,
    borderRadius:20,
    alignItems: 'center',
    justifyContent:'center',
    color: 'white',
    marginBottom:10,
  },
  bublesrow: {
    flexDirection: 'row',
    marginRight: 20,
  },
  TextBuble: {
    color:'white',
  },
})
