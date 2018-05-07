import * as _ from '../actions/types';

const defaultInitial = {
    list:[],
    user:{},
}

export default function(state=defaultInitial,action){
    switch(action.type){
        case _.GET_USERS_LIST :
            return {...state,list:action.payload};
        case _.GET_USER :
            return {...state,user:action.payload};
        case _.ADD_USER :
            return {...state,list:[...state.list,action.payload]}
        case _.DELETE_USER :
            return {...state,list:state.list.filter(user => user.id !== action.payload)};
        default :
            return state;
    }
}