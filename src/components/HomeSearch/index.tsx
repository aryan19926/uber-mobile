import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Dropdown from 'react-native-vector-icons/MaterialIcons'

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <Icon name="clockcircle" size={20} color="black" />
          <Text>Now</Text>
          <Dropdown name="keyboard-arrow-down" size={16} color="black" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  inputBox: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    padding:5,
    fontSize: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
  },
});

export default HomeSearch
