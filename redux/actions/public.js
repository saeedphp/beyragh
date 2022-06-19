import axios from "axios";
import { serverUrl } from "../constants";

const publicApi = {
 getFaqs: () => async dispatch => {
   try {
     const res = await axios.get(`${serverUrl}cms/faq/list`);
     console.log(res)
     dispatch({type: 'GET_FAQS', data: res.data?.result})
   } catch (error) {
     
   }
 }
};

export default publicApi;
