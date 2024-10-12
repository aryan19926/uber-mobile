import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, voluptatibus sit ab dolorem fugit eum corporis fugiat magni, tempora possimus animi laudantium praesentium in. Qui reiciendis exercitationem in quo.</Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b80ff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CovidMessage
