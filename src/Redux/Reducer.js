import {combineReducers} from 'redux';
import { ProductReducer } from './ProductReducer';
export const reducer=combineReducers({productData:ProductReducer});
// console.log("Reducer",reducer);