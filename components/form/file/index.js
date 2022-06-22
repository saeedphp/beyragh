import Image from "next/image";
import { useState, useEffect } from "react";
import imagePlaceholder from '../../../public/images/image-placeholder.png';

const File = ({
  customWidth,
  customClass,
  type,
  onChange,
  themeColor,
  value,
  title,
  file,
  id,
  deleteHandler,
}) => {
    const [focus, setFocus] = useState('border-gray-300 border-dotted');
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [del, setDelete] = useState(false);
    useEffect(() => {
        if (file) {
            setImageUrl(URL.createObjectURL(file));
            setDelete(true)
        }else{
            setImageUrl(null);
            setDelete(false)
            setFocus('border-gray-300 border-dotted')
        }

    }, [file]);

    function overrideEventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
      };
      function handleDragAndDropFiles(event) {
        overrideEventDefaults(event);
        if (!event.dataTransfer) return;
        handleFiles(event.dataTransfer.files);
      }
      const handleFiles = (fileList) => {
        if (fileList) {
          let files = Array.from(fileList);
        //   setFiles(files);
          console.log(files);
          onChange(files[0]);
        }
      };
  return (
    <div
      className={`${customWidth ? customWidth : "w-full"} flex flex-col my-3`}
    >
      <p className="text-gray4F font-bold mb-2">{title}</p>
      <div
        className="w-full rounded-lg h-52 p-6 flex flex-col items-center justify-center border-2  border-gray-500 "
        onDrop={overrideEventDefaults}
        onDragEnter={overrideEventDefaults}
        onDragLeave={overrideEventDefaults}
        onDragOver={overrideEventDefaults}
      >
        <input
          type="file"
          className="hidden"
          id={`file` + id}
          accept="image/*"
          onFocus={() => setFocus("border-red52")}
          onChange={(e) => {
            onChange(e.target.files[0]);
            setFocus("border-red52 border-solid");
          }}
        />
        <label
          onDrop={handleDragAndDropFiles}
          onDragEnter={overrideEventDefaults}
          onDragLeave={overrideEventDefaults}
          onDragOver={overrideEventDefaults}
          htmlFor={"file" + id}
          className={`flex flex-col w-full max-w-52 h-full text-center items-center  border-2 ${focus} rounded-lg py-3 cursor-pointer`}
        //   style={{ maxHeight: "200px" }}
        >
          {imageUrl == null ? (
            <>
              
                <Image src={imagePlaceholder}  />
            
              
              <p
                className="text-sm leading-7 text-gray-400"
                style={{ fontSize: "70%" }}
              >
                یک فایل را اینجا بکشید یا انتخاب کنید
              </p>
              <button className="bg-red49 p-2 rounded text-sm mt-1 text-white px-8">
                انتخاب فایل
              </button>
            </>
          ) : (
            <>
              <div className="h-40 flex flex-col justify-center items-center w-full">
                <img
                  src={imageUrl}
                  className="rounded-lg max-w-full max-h-32"
                />
              </div>
            </>
          )}
        </label>
        {del && (
          <div
            className=" top-0 mt-2 cursor-pointer  bg-red-500 w-full h-12 flex items-center justify-center text-white rounded-lg"
            onClick={() => deleteHandler(null)}
          >
            حذف
          </div>
        )}
      </div>
    </div>
  );
};

export default File;


// HOW TO USE --------------------------------- HOW TO USE
//
//
// this component Always Needs An Onchange And A File props To Work