import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    name: "",
    img: "",
    isLoading: false,
    isError: false,
    products: [],
    featureProduct: [],
    isSigleLoading: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Kalyani Basodiya",
                img: "./images/hero.jpg"
            }
        })
    }
    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "About page",
                img: "./images/hero.jpg"
            }
        })
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    // first API call for feature products
    const getProduct = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            // console.log(res);
            const products = await res.data;
            // console.log(products )
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    //Get 2nd Api call for single product

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            // console.log(singleProduct)
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }

    useEffect(() => {
        getProduct(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct, updateHomePage, updateAboutPage }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };