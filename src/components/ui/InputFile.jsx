import React, { forwardRef } from "react";
import { useUploadMutation } from "../../redux/features/common/commonApi";

const InputFile = forwardRef(
  ({ name, label, className, title, icon, onChange, subKey }, ref) => {
    const [fileUpload] = useUploadMutation();

    const handleFileChange = async (e) => {
      try {
        const selectedFile = e?.target?.files[0];
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile);
          let result = await fileUpload(formData);
          if (result?.data?.success) {
            onChange(name, result?.data?.data?.url, subKey);
          }
        }
      } catch (error) {
        // console.error("Error during file upload:", error);
      }
    };

    return (
      <div>
        {title && <h3 className="pb-1">{title}</h3>}
        <div className="flex h-[35px] items-center rounded-lg border dark:border-black-300  ">
          {icon && (
            <label
              className=" flex h-[35px] w-[50px] items-center justify-center rounded-l-lg bg-gray-100 dark:bg-black-300 "
              htmlFor=""
            >
              {icon}
            </label>
          )}
          <input
            name={name}
            type="file"
            ref={ref}
            onChange={handleFileChange}
            className={`${className} p-1 text-[13px] text-black`}
          />

          <span className="font-bold">{label}</span>
        </div>
      </div>
    );
  }
);

export default InputFile;
