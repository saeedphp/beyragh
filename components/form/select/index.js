const Select = ({
    customWidth,
    customClass,
    title,
    onChange,
    themeColor,
    items,
  }) => {
    return (
      <div className={`${customWidth ? customWidth : "w-full"} flex flex-col my-3`}>
        <p className="text-gray4F font-bold mb-2">{title}</p>
        <div className="w-full rounded-lg flex border border-gray-400 h-14 border-r-0">
          <span
            className={`${themeColor ? `bg-${themeColor}` : "bg-red49"} w-2 rounded-r-md`}
          ></span>
          <select
            
            className={`${customClass} w-full px-2 rounded-l-lg bg-white text-gray4F font-bold text-sm focus:outline-none`}
            placeholder="انتخاب کنید"
            onChange={e => onChange(e.target.value)}
          >
              <option>انتخاب کنید</option>
              {
                  items?.map((item) => (
                      <option value={item.id} key={`${title}__${item.id}`}>
                          {item.title}
                      </option>
                  ))
              }
          </select>
        </div>
      </div>
    );
  };
  export default Select;

// HOW TO USE ------------------------------------- HOW TO USE

//   Data Model Of The options Must Have an Id and a title.
// 
//   Example for props.item:  [
//       {
//         id: 0,
//         title: 'this is the Title'
//       },
//       {
//         id: 1,
//         title: 'This is Another Title'
//       },
// ]
// 
// 
// themeColor Property Must Be A Tailwind Color Variable