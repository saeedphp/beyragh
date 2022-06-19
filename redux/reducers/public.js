

const initialState = {
  faqs: []
};


export default function publicApi(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    
    case 'GET_FAQS':
      return{
        ...state,
        faqs: data
      }
    default:
      return state;
  }
}
