case "GET_SORT_VALUE":
            let userShortValue = document.getElementById("sort");
            let sort_value = userShortValue.options[userShortValue.selectedIndex].value;
            console.log(sort_value)
            return {
                ...state,
                sorting_value: sort_value,
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProduct = [...action.payload]

            if (state.sorting_value === "lowest"){
                const sortingProducts=(a,b)=>{
                    return a.price-b.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts);
            }

            if (state.sorting_value === "heighest"){
                const sortingProducts=(a,b)=>{
                    return b.price-a.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts);
            }

            if (state.sorting_value === "a-z")
                newSortData = tempSortProduct.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })

            if (state.sorting_value === "z-a")
                newSortData = tempSortProduct.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            return {
                ...state,
                filter_product: newSortData,
            }