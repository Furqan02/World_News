import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import DarkMode from 'react-native-vector-icons/Ionicons';
import Forward from 'react-native-vector-icons/SimpleLineIcons';
import Refresh from 'react-native-vector-icons/Ionicons';
import { darkMode, topNavigationColor, white, lightWhite, red, black, Theme } from '../color/color';
import { GetData } from '../store/action';
import { useDispatch } from 'react-redux';
import Live from '../assets/giphy.gif'

const TopNavigation = ({ index, setIndex }) => {

    const dispatch = useDispatch()

    return (
        <View style={{
            ...styles.container,
            backgroundColor: topNavigationColor,
        }}
        >
            {index === 0 ? (
                // <TouchableOpacity
                //     onPress={() => {
                //         Theme(true)
                //     }}
                //     style={styles.left}
                // >
                //     <Text
                //         style={{ ...styles.text, color: lightWhite }}
                //     >
                //         <DarkMode
                //             name="md-moon-sharp"
                //             size={24}
                //             color={lightWhite}
                //         />
                //     </Text>
                // </TouchableOpacity>
                // <Image style={{resizeMode:'contain',width:100,height:30,}} source={{uri:"https://potterscity.com/wp-content/uploads/2021/09/radio2.gif"}} />
                <Image source={require('../assets/giphy.gif')} style={{ resizeMode: 'contain', height: 30, width: 70 }} />
            ) : (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Forward name="arrow-left" size={15} color={red} />
                    <Text
                        style={{ ...styles.text, color: lightWhite }}
                    >
                        Discover
                    </Text>
                </TouchableOpacity>
            )}

            <Text style={{ ...styles.center, color: lightWhite }}>
                {index ? "All News" : "World News"}
            </Text>
            {index ? (
                <TouchableOpacity
                    onPress={() => {
                        dispatch(GetData("general", "in"))
                    }}
                    style={styles.right}
                >
                    <Text style={styles.text}>
                        <Refresh name="reload-sharp" size={24} color={red} />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Text
                        style={{ ...styles.text, color: lightWhite }}
                    >
                        All News
                    </Text>
                    <Forward name="arrow-right" size={15} color={red} />
                </TouchableOpacity>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: black,
        borderBottomWidth: 0.3,

    },
    center: {
        paddingBottom: 6,
        borderBottomColor: red,
        borderBottomWidth: 3,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: "700",
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 16,
    },
    right: {
        width: 80,
        alignItems: "flex-end",
    },
});


export default TopNavigation
