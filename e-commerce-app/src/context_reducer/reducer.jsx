

const reducer = (state, action) => {
    
    switch (action.type) {
        case "add":
            return {
                ...state, pro: action.product
            }

        case "remove":
            return {
                ...state, pro: action.product
            }

        case "update price":
            return {
                ...state, total: action.product
            }

    }
}

export default reducer;