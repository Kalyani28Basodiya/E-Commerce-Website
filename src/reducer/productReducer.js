
const ProductReducer = (state, action) => {
    // if(action.type==="SET_LOADING"){
    //     return{
    //         ...state,
    //         isLoading:true,
    //     }
    // }
    // if(action.type==="SET_LOADING"){
    //     return{
    //         ...state,
    //         isLoading:false,
    //         isError:true,
    //     }
    // }

    switch (action.type) {
        case 'HOME_UPDATE':
            return {
                ...state,
                name: action.payload.name,
                img: action.payload.img,
            }
        case 'ABOUT_UPDATE':
            return {
                ...state,
                name: action.payload.name,
                img: action.payload.img,
            }

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }

        case 'SET_API_DATA':

            const featureData = action.payload.filter((curEle) => {
                return curEle.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProduct: featureData,
            }
        case 'API_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'SET_SINGLE_LOADING':
            return {
                ...state,
                isSigleLoading: true,
            }

        case 'SET_SINGLE_PRODUCT':
            return {
                ...state,
                isSigleLoading: false,
                singleProduct: action.payload,
                
            }
           
        case 'SET_SINGLE_ERROR':
            return {
                ...state,
                isSigleLoading: false,
                isError: true,
            }
        default:
            return state;
    }

}

export default ProductReducer;