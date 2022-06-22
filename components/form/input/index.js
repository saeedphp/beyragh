import separate from "../../../utils/separate";
const Input = ({
  customWidth,
  customClass,
  title,
  type,
  onChange,
  themeColor,
  value,
  separative
}) => {
  return (
    <div className={`${customWidth ? customWidth : "w-full"} flex flex-col my-3`}>
      <p className="text-gray4F font-bold mb-2">{title}</p>
      <div className="w-full rounded-lg flex border border-gray-400 h-14 border-r-0">
        <span
          className={`${themeColor ? `${themeColor}` : "bg-red49"} w-2 rounded-r-md`}
        ></span>
        <input
          type={type ? type : "text"}
          className={`${customClass} w-full px-2 rounded-l-lg`}
          onChange={onChange}
          value={separative ? separate(value) : value}
          max={1000}
        />
      </div>
    </div>
  );
};
export default Input;


// HOW TO USE ------------------------------------- HOW TO USE
// 
// themeColor Property Must Be A Tailwind Color Variable
// 
// 