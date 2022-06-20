import { useState } from "react";
import { connect } from "react-redux";
import {BiEdit} from 'react-icons/bi';
import Input from "../../form/input";

const SubmitProclamation = ({choosedCategory, choosedCatParentId, categories, lastStep}) => {
    const categoryTitle = choosedCatParentId == null ? categories.find(itm => itm.id == choosedCategory).title : 
        categories.find(itm => itm.id == choosedCatParentId)?.relatedCats.find(itm => itm.id == choosedCategory).title;
        const parentTitle = categories.find(itm => itm.id == choosedCatParentId)?.title;
    return (
        <div className=" bg-white w-1/3 rounded-lg shadow-md p-6 px-10 flex flex-col items-center">
            <h1 className="w-full text-right font-bold text-xl text-red49">
        ثبت آگهی
      </h1>
      <div className="bg-pinkF6 w-full px-5 py-3 rounded-md my-5 flex items-center justify-between text-gray4F">
        <p>{parentTitle && `${parentTitle} - `} {categoryTitle}</p>
        <button 
        onClick={lastStep}
        className="border border-red49 rounded-md flex items-center p-3 text-xs">
        <span className="text-xl ml-1"><BiEdit /></span>
            <span className="font-bold">تغییر دسته بندی</span>
            
        </button>
      </div>
        <form className="w-full">
            <Input title="عنوان و نام محصول" />
        </form>

        </div>
    )
}
const mapStateToProps = state => ({
    choosedCategory: state.ProclamationSlice.categoryId,
    choosedCatParentId: state.ProclamationSlice.parentId,
    categories: state.ProclamationSlice.categories,
})
export default connect(mapStateToProps)(SubmitProclamation);