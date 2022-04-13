import React from 'react'
import { View, Text, Dimensions, FlatList, StyleSheet, TouchableOpacity, Linking,ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { darkMode, red, textColor, white } from '../color/color'
import { GetAllChennal } from '../store/action'
import GoTotop from 'react-native-vector-icons/Feather';
import Categories from '../components/categories'
import TopChannel from '../components/topChannel'


const AllChannel = () => {

    const state = useSelector(state => state)
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(GetAllChennal())
    }, [])



    return (
        <View>
            <View style={{ alignSelf: 'flex-start', padding: 10, marginBottom: 5 }}>
                <Text style={{ borderBottomColor: red, borderBottomWidth: 3, color: textColor, fontSize: 20, borderRadius: 8, }}>All Channels</Text>
            </View>

            <View style={{ width: windowWidth, }}>
                {state.allChennal ? <FlatList
                    showsVerticalScrollIndicator={false}
                    data={state.allChennal}
                    renderItem={
                        (item, index) => {
                            return (
                                <TouchableOpacity style={styles.allChennal} onPress={() => { Linking.openURL(item.item.url) }}>
                                    <Text style={styles.News}>{item.item.name}</Text>
                                    <Text style={{ color: textColor, fontSize: 15, }}>{item.item.description}</Text>
                                </TouchableOpacity>
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                /> : <ActivityIndicator size={'large'} color={red}/>}
            </View>
        </View>
    );
};

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
    News: {
        color: textColor,
        fontSize: 17,
        paddingVertical: 5,
        marginBottom: 5,
        borderLeftWidth: 3,
        borderLeftColor: red,
        paddingLeft: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
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
export default AllChannel;
