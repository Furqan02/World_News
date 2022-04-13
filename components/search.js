import { View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView, FlatList, Modal } from 'react-native'
import React from 'react'
import { black, textColor, white, search, darkMode, red, lightWhite } from '../color/color'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import News from './news'
import Close from 'react-native-vector-icons/MaterialIcons'
import Closecircleo from 'react-native-vector-icons/AntDesign'


const Search = () => {

  const windowHeight = Dimensions.get('window').height
  const state = useSelector(state => state)

  const [value, setValue] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [modeVisibale, setModeVisibale] = useState(false)
  const [currentNews, setCurrentNews] = useState()

  const searchNews = (text) => {
    if (text) {
      setSearchResults(state.data.filter((e) => e.title.includes(text)))
    } else {
      setSearchResults([])
    }
    setValue(text)
  }
  function handleMode(e) {
    setModeVisibale(true)
    setCurrentNews(e)
    // console.log(currentNews)
  }
  return (

    <View style={{ width: '100%', paddingHorizontal: 5, paddingTop: 10, position: 'absolute', zIndex: 1, }}>

      <View style={{ flexDirection: 'row', backgroundColor: search, borderRadius: 5, }}>
        <TextInput value={value} onChangeText={(text) => searchNews(text)} placeholder='Search for news' placeholderTextColor={textColor} style={{ width: '88%', color: textColor, fontSize: 15, padding: 12, paddingRight: 0 }} />
        {value ? <TouchableOpacity onPress={() => {
          return (
            setValue(),
            searchNews()
          )
        }} style={{ alignSelf: 'center', width: '12%' }}><Close name="close" size={32} color={darkMode} /></TouchableOpacity> : null}
      </View>

      <View style={{ borderRadius: 4, overflow: 'hidden', }}>

        <FlatList
          style={{ maxHeight: windowHeight }}
          data={searchResults}
          renderItem={
            (item, index) => {
              return (
                <View style={{ backgroundColor: search, borderRadius: 5, color: textColor, padding: 5, margin: 0.5, }}>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => { handleMode(item.item) }} style={{ margin: 5 }}><Text style={{ color: textColor, }}>{item.item.title}</Text></TouchableOpacity>
                </View>
              )
            }
          }
          keyExtractor={item => item.id}
        />

        <Modal animationType='slide' transparent={modeVisibale} visible={modeVisibale} onRequestClose={() => {
          setModeVisibale(!modeVisibale)
        }}>
          <TouchableOpacity style={{ position: 'absolute', right: 15, top: 15, zIndex: 1, }} onPress={() => {
            setModeVisibale(!modeVisibale)
          }}>
            <Closecircleo name="closecircleo" size={25} color={lightWhite} />
          </TouchableOpacity>

          {windowHeight < 600 ? <ScrollView><News item={currentNews} /></ScrollView> : <News item={currentNews} />}

        </Modal>


      </View>
    </View>

  )
}



export default Search