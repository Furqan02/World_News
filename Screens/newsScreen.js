import React, { useState } from 'react'
import { View, Text, Dimensions, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { GetData } from '../store/action'
import Carousel from 'react-native-snap-carousel'
import News from '../components/news'
import GoTotop from 'react-native-vector-icons/Feather';
import { black, red, textColor, white } from '../color/color'


const NewsScreen = () => {
    const state = useSelector(state => state)

    const dispatch = useDispatch()
    const [activeIndex, setActiveIndex] = React.useState();
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width
    const [scroll, setScroll] = useState()
    const flatlistRef = React.useRef()
    const [filterHide, setFilterhide] = useState(true)
    const scrollTop = () => {
        setScroll(0)
        flatlistRef.current.scrollToIndex({ index: 0, });
    };

    React.useEffect(() => {
        getdata("general", "in")
    }, [])

    function getdata(category, country) {
        dispatch(GetData(category, country))
    }

    return (
        <View style={{ flex: 1, }}>
            {/* Filter */}
           {filterHide? <View style={styles.filter}>

                <ScrollView horizontal={true} >
                    <TouchableOpacity onPress={() => getdata(state.setCategorie, "in")}><Text style={styles.filterText}> India </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => getdata(state.setCategorie, "us")}><Text style={styles.filterText}> USA </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => getdata(state.setCategorie, "au")}><Text style={styles.filterText}> Australia </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => getdata(state.setCategorie, "ru")}><Text style={styles.filterText}> Russia </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => getdata(state.setCategorie, "fr")}><Text style={styles.filterText}> France </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => getdata(state.setCategorie, "gb")}><Text style={styles.filterText}> United Kingdom </Text></TouchableOpacity>
                </ScrollView>

            </View>:null}
            {state.data ? <FlatList
                ref={flatlistRef}
                onMomentumScrollEnd={(event) => setScroll(event.nativeEvent.contentOffset.y)}
                data={state.data}
                renderItem={
                    (item, index) => {
                        item.item.source.name === 'CNN' || item.item.source.name === 'BBC News' || item.item.source.name === 'Fox News' || item.item.source.name === 'Google News' ? setFilterhide(false):setFilterhide(true)
                        return (
                            <View style={{ flex: 1, borderBottomColor: red, borderBottomWidth: 2, }}>
                                <Image source={{ uri: item.item.urlToImage }} style={{ resizeMode: 'cover', height: 250, width: windowWidth }} />

                                <Text style={styles.title}>{item.item.title}</Text>

                                <Text style={styles.description}>{item.item.description}</Text>
                                <Text style={styles.covarage}>covarage by {item.item.source.name}</Text>

                                <TouchableOpacity onPress={() => { Linking.openURL(item.item.url) }}>
                                    <Text style={styles.content}>{item.item.content?.slice(0, 48)}... Read More</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
                keyExtractor={item => item.id}
            /> : null}

            {scroll > 3000 ? <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', borderTopColor: red, borderWidth: 0.5 }} onPress={() => {
                scrollTop()
            }}><GoTotop name="chevron-up" size={45} color={textColor} /></TouchableOpacity> : null}
        </View>
        // <View style={{ flex: 1, }}>
        //     {state.data ? <Carousel
        //         // firstItem={state.data}
        //         layout='stack'
        //         data={state.data}
        //         removeClippedSubviews={false}
        //         // useScrollView={true}
        //         sliderHeight={300}
        //         itemHeight={windowHeight}
        //         vertical={true}
        //         onSnapToItem={(index) => { setActiveIndex(index) }}
        //         renderItem={(item,index)=><Text>nai chalrha</Text>}
        //     /> : <Text>nai chalrha</Text>}
        // </View>
    )
}

const styles = StyleSheet.create({
    filter: {
        // borderBottomColor: black,
        // borderBottomWidth: 0.5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    filterText: {
        borderRadius: 20,
        padding: 10,
        color: white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
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

export default NewsScreen
