import { useState } from "react";
import { connect } from "react-redux";
import { userActions } from "../../../redux/actions";
import LoginModalLayout from "./login";
import RegisterModalLayout from "./register";


const LoginModal = ({loginModalStatus, loginModalControler, isLogin}) => {
    const [type, setType] = useState(0);
    const typeLayout = [
        <LoginModalLayout changeType={() => setType(1)} closeModal={() => loginModalControler(false)} key={`LOGIN_MODAL`}/>,
        <RegisterModalLayout changeType={() => setType(0)} closeModal={() => loginModalControler(false)} key={`REGISTER_MODAL`}/>
    ]
    return(
        loginModalStatus && !isLogin ? (
           <div className="w-full min-h-screen top-0 fixed flex items-center justify-center z-10 bg-opac">
            {typeLayout[type]}
           </div>
       ) : null
    )
}
const mapStateToProps = (state) =>({
    loginModalStatus: state.userReducer.loginModal,
    isLogin: state.userReducer.isLogin
});
const mapDispatchToProps ={
    loginModalControler: userActions.loginModalControler,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);