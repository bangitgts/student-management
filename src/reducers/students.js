import * as types from "../constants/ActionTypes";

var initialState = [];
const students = (state = initialState,action) =>{
    switch(action.type){
        case types.FETCH_API:
            state = action.products;
            return [...state]
        default:return [...state]
    }
}
export default students