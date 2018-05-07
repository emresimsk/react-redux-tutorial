import * as _ from './types';

const rootUrl = "http://rest.learncode.academy/api/emresimsek/friends/"

export const fetchGetUsers = () => dispatch => {
    fetch(rootUrl)
    .then(response => response.json())
    .then((response) => {
        dispatch({type:_.GET_USERS_LIST,payload:response});
    })
}


export const fetchGetUser = (id) => dispatch => {
    fetch(rootUrl+id)
    .then(response => response.json())
    .then((response) => {
        dispatch({type:_.GET_USER,payload:response});
    })
}

export const fetchAddUser = (user) => dispatch => {
    fetch(rootUrl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
    })
    .then(response => response.json())
    .then((response) => {
        dispatch({type:_.ADD_USER,payload:response});
    })
}


export const fetchDeleteUser = (id) => dispatch => {
    fetch(rootUrl+id, {
      method: "DELETE",
    })
    .then((response) => {
      dispatch({type:_.DELETE_USER,payload:id})
    })
}