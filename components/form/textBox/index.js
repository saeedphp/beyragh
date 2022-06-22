
const TextBox = ({
  customWidth,
  customClass,
  title,
  type,
  onChange,
  themeColor,
  value,
}) => {
  return (
    <div className={`${customWidth ? customWidth : "w-full"} flex flex-col my-3`}>
      <p className="text-gray4F font-bold mb-2">{title}</p>
      <div className="w-full rounded-lg flex border border-gray-400 h-40 border-r-0">
        <span
          className={`${themeColor ? `bg-${themeColor}` : "bg-red49"} w-2 rounded-r-md`}
        ></span>
        <textarea
          type={type ? type : "text"}
          className={`${customClass} w-full px-2 rounded-l-lg`}
          onChange={onChange}
          value={value}
          rows={5}
        ></textarea>
      </div>
    </div>
  );
};
export default TextBox;


// HOW TO USE ------------------------------------- HOW TO USE
// 
// themeColor Property Must Be A Tailwind Color Variable
// 
// 