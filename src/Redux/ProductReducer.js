// Redux state
const initialState = {
    cartData: []
}
export const ProductReducer = (state = initialState, action) => {
    console.log("state store", action.type);
    switch (action.type) {
        case "ADD_TO_CART":
            const index = state.cartData.findIndex(item => item.id === action.payload.id);
            if (index >= 0)
                ++state.cartData[index].count;
            else
                return { ...state, cartData: [...state.cartData, { ...action.payload, count: 1 }] };
        case "REMOVE_FROM_CART":
            const fproducts = state.cartData.filter(cartItem => cartItem.id != action.payload)
            return { ...state, cartData: fproducts };

        case "REMOVE_FROM_CART_QTY":
            state.cartData.map(item => console.log("before updating state cart", item))
            const updatedState = state.cartData.map(item => {
                if (item.id == action.payload) {
                    if (item.count == 1) {
                    }
                    else return { ...item, count: --item.count }
                }
                else return item
            }).filter(item => item !== undefined);
            
            updatedState.map(item => console.log("After updating state cart", item));
            return { ...state, cartData: updatedState };
        default: return state;
    }
}