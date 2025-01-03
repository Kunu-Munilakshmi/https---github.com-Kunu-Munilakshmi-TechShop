import { ActionType } from "./ActionType";

// Action creator fn  for AddToCart 
export const addToCart=(product)=>{
return {type:ActionType.ADD_TO_CART, payload:product}
}
// Action craetor fn for RemoveFromCart
export const removeFromCart=(id)=>{
    return {type:ActionType.REMOVE_FROM_CART,payload:id}
}
// Action creator fn for reducing quantity/count of a product
export const removeFromCartQty=(id)=>{
    return {type:ActionType.REMOVE_FROM_CART_QTY, payload:id}
}