import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { red, white, textColor, darkMode } from '../color/color';

const News = ({ item, index }) => {

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  return (

    <View style={{ flex: 1, backgroundColor: darkMode }}>
      <View style={{ flex: 1, justifyContent: 'space-between', }}>

        <View>
          <Image source={{ uri: item.urlToImage }} style={{ resizeMode: 'cover', height: 320, width: windowWidth }} />

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.covarage}>covarage by {item.source.name}</Text>
        </View>

        <View>
          <ImageBackground blurRadius={80} source={{ uri: item.urlToImage }}>
            <TouchableOpacity onPress={() => { Linking.openURL(item.url) }}>
              <Text style={styles.content}>{item.content?.slice(0, 48)}... Read More</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  title: {
    color: textColor,
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 20
  },
  description: {
    color: textColor,
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
  },
  covarage: {
    color: textColor,
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 15
  },
  content: {
    color: textColor,
    margin: 10,
    fontSize: 15,
  }
});


export default News;
