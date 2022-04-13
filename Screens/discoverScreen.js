import React from 'react'
import { View, Text, Dimensions, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground, Linking, } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { darkMode, red, textColor, white } from '../color/color'
import GoTotop from 'react-native-vector-icons/Feather';
import Categories from '../components/categories'
import TopChannel from '../components/topChannel'
import AllChannel from '../components/allChannel'
import Search from '../components/search';

const DiscoverScreen = () => {

    const state = useSelector(state => state)
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width
    const scrollRef = React.useRef(null);
    const [scroll, setScroll] = React.useState(0)



    if (windowHeight < 550) {
        return (
            <View style={{ flex: 1 }}>
                <Search />
                <ScrollView>
                    <Categories />
                    <TopChannel />
                    <AllChannel />
                </ScrollView>
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1 }}>
                <Search />
                <Categories />
                <TopChannel />
                <AllChannel />
            </View>
        )
    }
    return (

        <View style={{ flex: 1 }}>
            {/* <ScrollView> */}
            <Categories />
            <TopChannel />
            <AllChannel />
            {/* </ScrollView> */}


            {/* <ScrollView style={{ flex: 1 }} ref={scrollRef} onMomentumScrollEnd={(event) => setScroll(event.nativeEvent.contentOffset.y)}>
            </ScrollView>

            GOTO TOP
            {scroll < 1000 ? null : <TouchableOpacity style={styles.gotoBtn} onPress={() => {
                scrollRef.current.scrollTo({
                    x: 0,
                    y: 0,
                    animated: true,
                });
            }}><GoTotop name="chevron-up" size={40} color={textColor} /></TouchableOpacity>}
         */}
        </View>
    )
}

const styles = StyleSheet.create({
    allChennal: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    gotoBtn: {
        position: 'absolute',
        bottom: 25, right: 25,
        backgroundColor: darkMode,
        padding: 5,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

    }
});
export default DiscoverScreen
