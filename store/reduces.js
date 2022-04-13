const INITIAL_STATE = {
    data: [],
    index:0,
    allChennal: [],
    setCategorie:'general',
    categories: [
        {
            pic: "https://img.icons8.com/fluent/96/000000/news.png",
            name: "general",
        },
        {
            pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
            name: "business",
        },
        {
            pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
            name: "entertainment",
        },
        {
            pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
            name: "health",
        },
        {
            pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
            name: "science",
        },
        {
            pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
            name: "sports",
        },
        {
            pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
            name: "technology",
        },
    ],
    sources: [
        {
            id: "bbc-news",
            name: "BBC News",
            pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
        },
        {
            id: "cnn",
            name: "CNN",
            pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
        },
        {
            id: "fox-news",
            name: "Fox News",
            pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
        },
        {
            id: "google-news",
            name: "Google News",
            pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
        },
    ]

}
function Reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "SAVEDATA":
            return ({
                ...state,
                data: action.data
            })
        case "SAVEALLCHENNAL":
            return ({
                ...state,
                allChennal: action.data
            })
        case "UPDATE_INDEX":
            return ({
                ...state,
                index:action.index
            })
        case "SET_CATEGORIES":
            return ({
                ...state,
                setCategorie:action.setCategorie
            })
        default:
            return state
    }
}



export default Reducer

