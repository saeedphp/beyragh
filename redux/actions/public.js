import _dataManager from "../dataManager";
const publicActions = {
    checkLayoutVersion: () => async dispatch => {
        window.addEventListener('resize', function() {
            if(window.innerWidth <= 1200){
                dispatch({type: 'SET_MOBILE', payload: true});
            }
            else{
                dispatch({type: 'SET_MOBILE', payload: false});
            }
        }, true);
    }
};

export default publicActions;