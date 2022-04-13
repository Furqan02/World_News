import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, useWindowDimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/discoverScreen';
import NewsScreen from '../Screens/newsScreen';
import TopNavigation from './topNavigation';


function Tabs() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const layout = useWindowDimensions()
    const index = state.index

    function updateIndex(setindex) {
        dispatch({ type: 'UPDATE_INDEX', index: setindex })
    }

    const [routes] = React.useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' },
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={updateIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={state.index} setIndex={updateIndex} />}
        />
    )
}



export default Tabs;
