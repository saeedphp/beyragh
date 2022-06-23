import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BiEdit } from "react-icons/bi";
import Input from "../../form/input";
import Select from "../../form/select";
import File from "../../form/file";
import TextBox from "../../form/textBox";
import Link from "next/link";
import FormMap from "../../form/map";
import { adsActions } from "../../../redux/actions";

const SubmitProclamation = ({
  choosedCategory,
  choosedCatParentId,
  categories,
  lastStep,
  postNewAd,
}) => {
  const categoryTitle =
    choosedCatParentId == null
      ? categories.find((itm) => itm.id == choosedCategory).title
      : categories
          .find((itm) => itm.id == choosedCatParentId)
          ?.subCategories.find((itm) => itm.id == choosedCategory).title;
  const parentTitle = categories.find(
    (itm) => itm.id == choosedCatParentId
  )?.title;

  const [adPrimaryVal, setAdPrimaryVal] = useState({
    title: null,
    phoneNumber: "",
    state: "",
    city: "",
    cityZone: "",
    images: [],
    price: null,
    description: null,
  });

  const sendAdd = () => {
    if(adPrimaryVal.title && adPrimaryVal.price){
      postNewAd({
        is_active: true,
        title: adPrimaryVal.title,
        description: adPrimaryVal.description,
        price: adPrimaryVal.price,
        related_user: 1,
      });
    }
  };

  return (
    <div className=" bg-white w-1/3 max-w-3xl rounded-lg shadow-md p-6 px-10 flex flex-col items-center">
      <h1 className="w-full text-right font-bold text-xl text-red49">
        ثبت آگهی
      </h1>
      <div className="bg-pinkF6 w-full px-5 py-3 rounded-md my-5 flex items-center justify-between text-gray4F">
        <p>
          {parentTitle && `${parentTitle} - `} {categoryTitle}
        </p>
        <button
          onClick={lastStep}
          className="border border-red49 rounded-md flex items-center p-3 text-xs"
        >
          <span className="text-xl ml-1">
            <BiEdit />
          </span>
          <span className="font-bold">تغییر دسته بندی</span>
        </button>
      </div>
      <form className="w-full flex flex-col mt-6">
        <Input title="عنوان و نام محصول" 
        value={adPrimaryVal.title}
        onChange={(e) => setAdPrimaryVal({...adPrimaryVal, title: e.target.value})}
        />
        <Input title="شماره تماس" />
        <Select title="استان - شهر" />
        <Select title="محدوده آگهی" />
        {/* <FormMap /> */}
        <File
          title="آپلود عکس آگهی"
          onChange={(image) =>
            setAdPrimaryVal({
              ...adPrimaryVal,
              images: [...adPrimaryVal.images, image],
            })
          }
          file={adPrimaryVal.images[0]}
        />
        <Input
          title="قیمت محصول (تومان)"
          value={adPrimaryVal.price}
          onChange={(e) =>
            setAdPrimaryVal({ ...adPrimaryVal, price: e.target.value })
          }
          separative
        />
        <Select title="برند و مدل" />
        <Select title="وضعیت" />
        <Select title="فیچر اصلی" />
        <TextBox
          title="توضیحات اضافی محصول"
          value={adPrimaryVal.description}
          onChange={(e) =>
            setAdPrimaryVal({ ...adPrimaryVal, description: e.target.value })
          }
        />

        <p
          className="rounded-lg w-full h-14 shadow text-lg flex items-center justify-center text-white bg-red49 my-3"
          onClick={() => postNewAd({
            is_active: true,
            title: adPrimaryVal.title,
            description: adPrimaryVal.description,
            price: parseInt(adPrimaryVal.price.replace(',', '')),
            related_user: 1,
          })}
        >
          ارسال آگهی
        </p>

        <div className="w-full flex justify-center">
          <Link href="/shopservice" className="text-red49 my-3 ">
            انصراف
          </Link>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  choosedCategory: state.adsReducer.choosedCat,
  choosedCatParentId: state.adsReducer.choosedCatPId,
  categories: state.adsReducer.categories,
});
const mapDispatchToProps = {
  postNewAd: adsActions.postNewAd,
};
export default connect(mapStateToProps, mapDispatchToProps)(SubmitProclamation);
