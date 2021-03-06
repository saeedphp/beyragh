import { useState } from "react";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { userActions } from "../../../../redux/actions";
import Input from "../../../form/input";

const LoginModalLayout = ({changeType, closeModal, login}) => {
  const [loginData, setLoginData] = useState({
    email: null,
    phoneNumber: null,
    password: null,
    username: null,
  });
  const setEmailOrPhoneNumber = (data) => {
    // if (data?.includes("@")) {
    //   setLoginData({ ...loginData, email: data, phoneNumber: null });
    // } else {
    //   setLoginData({ ...loginData, phoneNumber: data, email: null });
    // }
    setLoginData({...loginData, username: data});
    return data;
  };
  return (
    <div className="w-1/3 max-w-3xl bg-whiteFC rounded-2xl  p-10 flex flex-col ">
      <span className="w-full text-xl text-red49 cursor-pointer" onClick={closeModal}>
        <ImCross />
      </span>
      <h1 className="my-1 text-xl font-bold text-gray4F w-full text-center">ورود</h1>
      <Input
        title="ایمیل یا شماره تماس"
        // value={loginData.email ? loginData.email : loginData.phoneNumber}
        value={loginData.username}
        onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
      />
      <Input
        title="رمز عبور"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        type='password'
      />
      <p className="text-gray4F cursor-pointer mb-1">فراموشی رمز عبور</p>
      <div className="w-full flex flex-col items-center">
      <button className="w-1/2 h-14 my-3 bg-red49 rounded-lg shadow text-white font-bold"
      onClick={() => loginData.username && loginData.password && login(loginData)}
      >
        ورود
      </button>
      <button className="text-gray4F mt-1" onClick={changeType}>
        ثبت نام
      </button>

      </div>
    </div>
  );
};

const mapStateToProps = () => ({})
const mapDispatchToProps = {
    login: userActions.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalLayout);
