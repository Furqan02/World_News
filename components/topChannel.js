import React from 'react'
import { View, Text, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { darkMode, red, textColor, white } from '../color/color'
import { GetTopchennal, GetData } from '../store/action'


const TopChannel = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const windowWidth = Dimensions.get('window').width
    // React.useEffect(()=>{
    //     dispatch(GetTopchennal('cnn'))
    // },[])
    function goTopchennal(source) {
        dispatch(GetTopchennal(source))
    }

    return (
        <View>
            <View style={{ alignSelf: 'flex-start', padding: 10, marginBottom: 5 }}>
                <Text style={{ borderBottomColor: red, borderBottomWidth: 3, color: textColor, fontSize: 20, borderRadius: 8, }}>Top Channels</Text>
            </View>

            <View style={{ width: windowWidth, }}>
                {state.sources ? <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={state.sources}
                    renderItem={
                        (item, index) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    goTopchennal(item.item.id)
                                    dispatch({ type: 'UPDATE_INDEX', index: 1 })

                                }} style={{ margin: 10, justifyContent: 'center', alignItems: 'center', }}>
                                    <Image source={{ uri: item.item.pic }} style={{ resizeMode: 'cover', height: 80, width: 80, }} />
                                </TouchableOpacity>
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                /> : null}
            </View>
        </View>
    );
};

export default TopChannel;
