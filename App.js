import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, Modal,ActivityIndicator } from 'react-native';
import Tabs from './components/tabs';
import { Provider } from 'react-redux';
import Store from './store';
import { darkMode, lightWhite, red, textColor, Theme } from './color/color'
import SystemNavigationBar from "react-native-system-navigation-bar";
import NewsIcon from 'react-native-vector-icons/Ionicons';
import { useNetInfo } from '@react-native-community/netinfo';
import Wifi from 'react-native-vector-icons/Feather'


function App() {
  SystemNavigationBar.stickyImmersive()
  SystemNavigationBar.setNavigationBarContrastEnforced(true)
  const netInfo = useNetInfo().isInternetReachable
  const [spalish, setSpalish] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => { setSpalish(false) }, 2000);
    
  }, []);
  


  if (spalish) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkMode }}>
        <StatusBar backgroundColor={darkMode}
          barStyle='dark-content'
          hidden={true} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 42, color: red, fontWeight: 'bold', fontFamily: 'serif' }}>World News </Text>
          <NewsIcon name="newspaper" size={42} color={red} />
        </View>
      </View>
    )
  }
 else if (!netInfo) {
    return (
      <View style={{ flex: 1, backgroundColor: darkMode, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar backgroundColor={darkMode} barStyle='dark-content' hidden={true} />
        <Wifi style={{ marginBottom: 10 }} name="wifi-off" size={48} color={red} />
        <Text style={{ color: textColor, fontSize: 22 }}>Waiting for internet connection</Text>
      </View>
    )
  }
  return (
    <Provider store={Store}>

      <View style={{
        flex: 1,
        // margin: StatusBar.currentHeight,
        backgroundColor: darkMode,
      }}>

        <StatusBar backgroundColor={darkMode}
          barStyle='dark-content'
          hidden={true} />

        <Tabs />
      </View>

    </Provider>
  )



}

const styles = StyleSheet.create({

});

export default App;
