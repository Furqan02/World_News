import React, { useState } from 'react'
import { View, Text, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { darkMode, red, textColor, white } from '../color/color'
import { GetData } from '../store/action'


const Categories = () => {

    const state = useSelector(state => state)
    const windowWidth = Dimensions.get('window').width
    const dispatch = useDispatch()
    
    function selectCategorie(catagerie) {
        dispatch(GetData(catagerie))
        dispatch({setCategorie:catagerie,type:'SET_CATEGORIES'})
    }


    return (
        <View>
            <View style={{ alignSelf: 'flex-start', padding: 10,marginTop:60 }}>
                <Text style={{ borderBottomColor: red, borderBottomWidth: 3, color: textColor, fontSize: 20, borderRadius: 8, }}>Categories</Text>
            </View>

            <View style={{ width: windowWidth, }}>
                {state.categories ? <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={state.categories}
                    renderItem={
                        (item, index) => {

                            return (
                                <TouchableOpacity onPress={() => {
                                    selectCategorie(item.item.name)
                                    dispatch({ type: 'UPDATE_INDEX', index: 1 })
                                }} style={{ margin: 5, justifyContent: 'center', alignItems: 'center', }}>
                                    <Image source={{ uri: item.item.pic }} style={{ resizeMode: 'cover', height: 80, width: 80, }} />
                                    <Text style={{ color: textColor }}>{item.item.name}</Text>
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

export default Categories;
