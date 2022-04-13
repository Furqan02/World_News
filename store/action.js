import { parse } from "@babel/core";
import Axios from "axios";

function GetData(category = 'general', country = 'in') {
    return (dispatch) => {

        Axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`).then(
            (data) => {
                const setdata = data
                dispatch({ type: "SAVEDATA", data: setdata.data.articles })
                // console.log(setdata.data.articles)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
}

function GetAllChennal() {
    return (dispatch) => {

        Axios.get(`https://saurav.tech/NewsAPI/sources.json`).then(
            (data) => {
                const setdata = data
                dispatch({ type: "SAVEALLCHENNAL", data: setdata.data.sources })
                // console.log(setdata.data.sources)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
}


function GetTopchennal(source = 'cnn') {
    return (dispatch) => {

        Axios.get(`https://saurav.tech/NewsAPI/everything/${source}.json`).then(
            (data) => {
                const setdata = data
                dispatch({ type: "SAVEDATA", data: setdata.data.articles })
                // console.log(setdata.data.articles)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
}

export {
    GetData,
    GetAllChennal,
    GetTopchennal,
}