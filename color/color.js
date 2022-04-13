// import React from "react"
// import { AsyncStorage } from "react-native"


// async function Theme() {
//     var [darkTheme,setDarkTheme]=React.useState()
//     await AsyncStorage.setItem('@setTheme', JSON.stringify(true))
//     const getdata = JSON.parse(await AsyncStorage.getItem('@setTheme'))
//     setDarkTheme(getdata)
//     console.log(getdata)
// }

const darkMode = "#282C35"
const white = 'white'
const lightWhite = '#eaebe1'
const red = "#FF0000"
const black = "black"
const topNavigationColor = '#282C35'
const textColor = '#eaebe1'
const search = '#1f1f1f'


// const darkMode = "#eaebe1"
// const white = 'white'
// const lightWhite = 'black'
// const red = "#FF0000"
// const black = "black"
// const topNavigationColor = '#eaebe1'
// const textColor = 'black'
// const search ='#eaebe1'

export {
    // Theme,
    darkMode,
    red,
    black,
    lightWhite,
    white,
    topNavigationColor,
    textColor,
    search
}