
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CardContex = createContext();
const initialState = {

}
const CardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCard = (id, color, amount, product) => [
        dispatch({ type: "ADD_TO_CARD", payload: { id, color, amount, product } })
    ]
    return <CardContex.Provider value={{ ...state, addToCard }}>
        {children}
    </CardContex.Provider>
}
const useCardContext = () => {
    return useContext(CardContex);
}
export { CardProvider, useCardContext };