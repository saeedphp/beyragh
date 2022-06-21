import { ApiConfig } from "./constants";
import axios from "axios";

let { baseUrl } = ApiConfig;
baseUrl = baseUrl + "/";

const Axios = axios.create({
  withCredentials: true,
  validateStatus: null,
  baseURL: baseUrl,
  //headers: access ? { Authorization: `Bearer ${access}` } : {},
});
class DataManager {
  get = async (url, params, opt, data) =>
    await this.check(
      url,
      opt,
      async () => await Axios.get(url, { params, ...opt }),
      data || params
    );
  post = async (url, params, opt, data ) =>
    await this.check(
      url,
      opt,
      async () => await Axios.post(url, params, opt),
      data || params
    );
  put = async (url , params , opt , data ) =>
    await this.check(
      url,
      opt,
      async () => await Axios.put(url, params, opt),
      data || params
    );
  delete = async (url , params , opt , data ) => {
    await this.check(
      url,
      opt,
      async () => await Axios.delete(url, { ...opt, data: params }),
      data || params
    );
  };

  check = async (url , { dispatch } , fetch , params ) => {
    dispatch = dispatch || (() => {});
    dispatch({ type: url.split("/")[0] + "/" + "loading" });
    let response = await fetch();
    switch (response.status) {
      case 200:
        dispatch({ type: url, data: response.data.data, params });
        return response.data.data;
      case 401:
        if (await this.refresh()) {
          let response = await fetch();
          dispatch({ type: url, data: response.data.data, params });
          return response.data.data;
        }
        break;
      default:
        dispatch({
          type: url.split("/")[0] + "/" + "error",
          data: response.data,
          params,
        });
    }
    return false;
  };

  refresh = async () => {
    let refresh = localStorage.getItem("refresh");
    if (!refresh) window.location.href = "/";
    let login = await this.login(
      "user/login",
      {},
      { headers: { Authorization: `Bearer ${refresh}` } }
    );
    return login ? true : false;
  };
  login = async (url , params , { dispatch } ) =>
    this.post(url, params, {
      dispatch: (obj ) => {
        let login = obj.data;
        if (!login || !login.refreshToken) return false;
        localStorage.setItem("refresh", login.refreshToken);
        localStorage.setItem("access", login.accessToken);
        delete login.refreshToken;
        delete login.accessToken;
        localStorage.setItem("userData", JSON.stringify(login.profile));
        dispatch(obj);
      },
    });

  logout = async (url , params , { dispatch } ) => {
    this.post(url, params, {
      dispatch: (obj ) => {
        localStorage.removeItem("refresh");
        localStorage.removeItem("access");
        localStorage.removeItem("USER_DATA");
        dispatch(obj);
      },
    });
  };
  status = () => {
    let refresh = localStorage.getItem("refresh");
    let userData = localStorage.getItem("USER_DATA");
    if (!refresh) return false;
    if (refresh == "undefined") {
      localStorage.removeItem("refresh");
      localStorage.removeItem("access");
      localStorage.removeItem("USER_DATA");
      return false;
    }

    return JSON.parse(userData || '');
  };
}
const _dataManager = new DataManager();

export default _dataManager;