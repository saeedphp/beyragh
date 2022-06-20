import { useState } from "react";
import { adCats } from "../../../data/ads";
import { IoIosArrowDown } from "react-icons/io";

const ChooseCategory = ({ categories }) => {
  const [showSubCats, setShowSubCats] = useState(null);
  return (
    <div className=" bg-white w-1/3 max-w-3xl rounded-lg shadow-md p-6 px-10 flex flex-col items-center">
      <h1 className="w-full text-right font-bold text-xl text-red49">
        ثبت آگهی
      </h1>
      <p className="w-full text-right text-lg text-gray4F font-bold my-3">
        انتخاب دسته بندی
      </p>
      {categories.map((item, idx) => (
        <div className="w-full  flex items-center flex-col  border-t py-5 px-3 border-gray-300">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-primaryBlack text-lg">
              <span className={`text-3xl text-red49 ml-2 `}>{item.icon}</span>
              <p>{item.title}</p>
            </div>
            {item.relatedCats?.length > 0 && (
              <p
                className={`${item.id == showSubCats && 'rotate-180'} text-3xl text-primaryBlack cursor-pointer`}
                onClick={() =>
                  showSubCats == item.id
                    ? setShowSubCats(null)
                    : setShowSubCats(item.id)
                }
              >
                <IoIosArrowDown />
              </p>
            )}
          </div>

                {
                    showSubCats == item.id && 
                    <div className="flex w-full flex-col py-3 px-10">
                        {
                            item.relatedCats.map((relatedCat, idx) => (
                                <p className="text-sm my-2 cursor-pointer text-secondaryBlack">{relatedCat.title}</p>
                            ))
                        }
                        </div>
                }

        </div>
      ))}
    </div>
  );
};

export default ChooseCategory;
ChooseCategory.defaultProps = {
  categories: adCats,
};
