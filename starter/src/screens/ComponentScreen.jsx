import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/global';

const ComponentScreen  = () => {
    const myEmotion = "love";
  return (
    <View style={styles.container}>
      <Text>This is component screen</Text>
      <Text>I {myEmotion} mobile development with Javascript</Text>
    </View>
  )
}

export default ComponentScreen

