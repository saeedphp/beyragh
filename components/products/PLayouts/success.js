import Link from "next/link";
import { useState } from "react";

const ProclamationSuccess = () => {
  return (
    <div className=" bg-white w-1/3 max-w-3xl rounded-lg shadow-md p-10 flex flex-col items-center text-red49">
      <h1 className="w-full text-center font-bold text-xl ">ثبت آگهی</h1>

      <div className="my-6 border border-green4A p-6 w-full text-center text-xl text-green4A rounded-xl">
        <p>اطلاعات با موفقیت ثبت شد. پس از بررسی و تایید آگهی شما ثبت خواهد شد</p>
      </div>
      <div className="text-xl mt-16 font-bold">
        <Link href="/shopservice">بازگشت به صفحه بازار و خدمات</Link>
      </div>
    </div>
  );
};

export default ProclamationSuccess;
