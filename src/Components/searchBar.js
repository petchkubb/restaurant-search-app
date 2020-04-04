import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'

const SearchBar = ({term, onTermChange,onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" color="black" style={styles.searchStyle}/>
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Search" 
      style={styles.input} 
      value={term} 
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row'
  },
  input: {
    fontSize: 18,
    flex: 1
  },
  searchStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 15
  }
})
export default SearchBar
