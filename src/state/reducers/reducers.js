import { PRODUCT } from "../actionCreators/action";

const initialState = {}

export const reducer = (state= initialState, action)=>{
    switch (action.type){
        case PRODUCT: 
        return {...state, payload};

        default: return state
    }
}