
const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            let priceArr = action.payload.map((curEle) => curEle.price);
            // console.log("priceArr", priceArr);
            // 1way
            // console.log(Math.max.apply(null, priceArr));
            //  2way
            // let maxPrice = priceArr.reduce((intialVal, cuVal) => Math.max(intialVal, cuVal),0);
            // console.log("mixprice", mixPrice);

            // 3way
            let maxPrice = Math.max(...priceArr);
            // console.log(maxPrice)

            return {
                ...state,
                filter_product: [...action.payload],
                all_product: [...action.payload],
                filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice }
            }

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_veiw: true,
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_veiw: false,
            }

        // dropdwon me usere ne konsi value ko click kiya usee sorting_value me assin kiya
        case "GET_SORT_VALUE":
            // let userShortValue = document.getElementById("sort");
            // let sort_value = userShortValue.options[userShortValue.selectedIndex].value;
            // console.log(sort_value)
            return {
                ...state,
                // sorting_value: sort_value,
                sorting_value: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct = [...action.payload]
            const { filter_product, sorting_value } = state;
            let tempSortProduct = [...filter_product];
            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "heighest") {
                    return b.price - a.price;
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_product: newSortData,
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            // console.log("value click:", value);
            // console.log("name click:", name);
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCT":
            let { all_product } = state;
            let tempFilterProduct = [...all_product]

            const { text, category, company, color, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curEle) => {
                    return curEle.name.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curEle) => curEle.category.toLowerCase() === category.toLowerCase()
                )
            }
            // console.log("category filter value:", company);

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curEle) => curEle.company.toLowerCase() === company.toLowerCase()
                )
            }
            // console.log("Company filter value:", company);

            if (color !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curEle) => curEle.colors.includes(color)
                )
            }
            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curEle) => curEle.price == price)
            }
            else {
                tempFilterProduct = tempFilterProduct.filter((curEle) => curEle.price <= price)
            }
            return {
                ...state,
                filter_product: tempFilterProduct,
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.maxPrice,
                },
            };
        default:
            return state;
    }
}

export default filterReducer;