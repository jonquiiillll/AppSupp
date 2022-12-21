import { StyleSheet, ActivityIndicator, Card, TouchableOpacity, Buttton, Image, FlatList, Text, View} from 'react-native'
import React, { useState, useEffect} from "react"
const apiUrl = 'http://localhost:3000/api/v1/users'

export default function Header() {
    return (
      <View style={styles.header}>
          <Text style={styles.texth2}>Метчи по тегам</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    header: {
      backgroundColor: '#FFFFFF',
      marginTop: -30,
      paddingLeft: 20,
      paddingTop: 35,
      height: 150,
    },
    texth2: {
      flex: 1,
      fontSize:30,
      fontWeight: 'semibold',
      marginTop: 25,
      marginBottom: 10,
    },
    bubles: {

    },
    textBuble: {
      fontSize:10,
      background: '#575757',
      fontWeight: 'semibold',
      marginTop: 25,
      marginBottom: 10,
    },
  })
