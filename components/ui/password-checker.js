const PasswordChecker = ({validity: {minChar}}) => {
    return (
        <PassWordStrengthIndicatorItem isValid={minChar} text="رمز عبور حداقل 8 رقم" />
    )
};

const PassWordStrengthIndicatorItem = ({isValid, text}) => {
    const highlightClass = isValid ? 'txt-success' : 'txt-failed';
    return (
        <p className={highlightClass}>
            {text}
        </p>
    )
};

export default PasswordChecker;