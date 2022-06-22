
import _dataManager from "../dataManager";
const userActions = {
    loginModalControler: (data) => async dispatch => {
            dispatch({type: 'CONTROL_MODAL', payload: data});
    },
    login: (data) => async dispatch => {
        await _dataManager.login('token/', data, {dispatch});
    },
};

export default userActions;


// HOW TO USE ----------------------------- HOW TO USE
//
//
// loginModalControler : DATA SHOULD BE BOOLEAN, 
//                              IF YOU SEND FALSE IT CLOSES THE LOGIN MODAL
//                              IF YOU SEND TRUE IT OPENS THE LOGIN MODAL