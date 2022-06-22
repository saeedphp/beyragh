import { useState } from "react";
import { ImCross } from "react-icons/im";
import Input from "../../../form/input";

const LoginModalLayout = ({changeType, closeModal}) => {
  const [registerData, setRegisterData] = useState({
    email: null,
    phoneNumber: null,
    password: "",
    fullName: '',
    confirmedPassword: null,
  });
 
  return (
    <div className="w-1/3 max-w-3xl bg-whiteFC h-fit rounded-2xl  p-10 flex flex-col ">
      <span className="w-full text-xl text-red49 cursor-pointer" onClick={closeModal}>
        <ImCross />
      </span>
      <h1 className="my-1 text-xl font-bold text-gray4F w-full text-center">ثبت نام</h1>
      <div className="flex flex-col ">
      <Input
        title="نام و نام خانوادگی"
        value={registerData.fullName}
        onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
      />
      <Input
        title="شماره تماس"
        value={registerData.phoneNumber}
        onChange={(e) => setRegisterData({...registerData, phoneNumber: e.target.value})}
      />
      <Input
        title="ایمیل"
        value={registerData.email}
        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
      />
      <Input
        title="رمز عبور"
        value={registerData.password}
        onChange={(e) =>
          setRegisterData({ ...registerData, password: e.target.value })
        }
        type='password'
      />
      <Input
        title="تکرار رمز عبور"
        value={registerData.password}
        onChange={(e) =>
          setRegisterData({ ...registerData, confirmedPassword: e.target.value })
        }
        type='password'
      />
      </div>
      <p className="text-gray4F cursor-pointer mb-1">فراموشی رمز عبور</p>
      <div className="w-full flex flex-col items-center">
      <button className="w-1/2 h-14 my-3 bg-red49 rounded-lg shadow text-white font-bold">
        ثبت نام
      </button>
      <button className="text-gray4F mt-1" onClick={changeType}>
        ورود
      </button>

      </div>
    </div>
  );
};

export default LoginModalLayout;
