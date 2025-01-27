import React, { useRef, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { useUploadMutation } from "../../redux/features/common/commonApi";
import Button from "./Button";
import Loading from "../Loading";

const UploadImageWithButton = ({ onChange }) => {
    const imageInputRef = useRef(null);

    const handleImageClick = () => {
        imageInputRef.current.click();
    };

    const [fileUpload, {isLoading}] = useUploadMutation();

    const handleImageFileChange = async (event) => {
        const file = event.target.files[0];

        try {
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                let result = await fileUpload(formData);
                if (result?.data?.success) {
                    onChange(result?.data?.data?.url);
                }
            }
        } catch (error) {
            // console.error("Error during file upload:", error);
        }
    };




    return (
        <>
                <Button className="!bg-black px-5 py-3 !text-gray-200" onClick={handleImageClick}>
                    {!isLoading ? <FaImage /> : <Loading variant="button" height="14px"></Loading>}
                </Button>
            <input
                type="file"
                ref={imageInputRef}
                onChange={handleImageFileChange}
                accept="image/*"
                style={{ display: 'none' }}
            />
        </>
    );
};

export default UploadImageWithButton;
