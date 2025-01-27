import React, { useRef } from "react";
import toast from "react-hot-toast";
import { FaVideo } from "react-icons/fa";
import { useUploadMutation } from "../../redux/features/common/commonApi";
import Loading from "../Loading";
import Button from "./Button";

const UploadVideoWithButton = ({onChange}) => {
    const videoInputRef = useRef(null);

    const handleVideoClick = () => {
        videoInputRef.current.click();
    };
    
    const [fileUpload, {isLoading}] = useUploadMutation();

    const handleVideoFileChange = async (event) => {
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
            // console.log(error);
            toast.error("Error during file upload: Video Item Too Large");
          }
    };
    

    return (
        <>
             <Button className="!bg-black px-5 py-3 !text-gray-200" onClick={handleVideoClick}>
             {!isLoading ? <FaVideo /> : <Loading variant="button" height="14px"></Loading>}
            </Button>
            <input
                type="file"
                ref={videoInputRef}
                value={''}
                onChange={handleVideoFileChange}
                accept="video/*"
                style={{ display: 'none' }}
            />

        </>
    );
};

export default UploadVideoWithButton;
