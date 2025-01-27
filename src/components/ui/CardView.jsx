import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import ExchangeModal from "../pages/ExchangeModal";
import DialogModal from "./DialogModal";
import SocialLinks from "./SocialLinks";

const CardView = ({ data, link, variant }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalType, setModalType] = useState("");

  const downloadLink = `${BASE_URL}/${variant}/vcf-download/${id}`;

  const onClose = () => {
    setModalType("");
  };

  const goBack = () => {
    navigate(-1);
  };

  console.log(data);

  return (
    <div className="mx-auto w-full max-w-[480px] space-y-6 p-6">
      <button
        onClick={goBack}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full !bg-white !text-black"
      >
        <IoArrowBack />
      </button>
      <div className=" rounded-b-xl bg-white shadow dark:bg-dark">
        <div className="relative">
          <div className="h-[137px] rounded-xl border-2  border-primary bg-gradient-to-b from-blue-50 to-blue-200 ">
            <img
              className="h-full w-full rounded-xl"
              src={data?.bannerImg}
              alt=""
            />
          </div>
          <div className="absolute -bottom-2 left-2  rounded-full  bg-primary ">
            <img
              className=" h-[116px]  w-[116px] rounded-full border border-primary"
              src={data?.image}
              alt=""
            />
          </div>
        </div>
        <div className="space-y-3 px-5 py-3">
          <div>
            <h2 className="text-[20px] font-black dark:text-white">
              {data?.name}
            </h2>
            <h4 className="font-medium capitalize"> {data?.position}</h4>
          </div>
          <div className="space-y-1 overflow-hidden border-l-2 border-primary pl-1 leading-none">
            <p className="text-[12px] font-medium text-gray-400">
              {data?.email}
            </p>
            <p className="text-[12px] font-medium text-gray-400">
              {data?.phone}
            </p>
            <p className="text-[12px] font-medium text-gray-400">
              {data?.whatsapp}
            </p>
            <p className="text-[12px] font-medium text-gray-400">{data?.fax}</p>
            <p className="text-[12px] font-medium text-gray-400">
              {data?.education}
            </p>
            <p className="text-[12px] font-medium text-gray-400">
              {data?.address}
            </p>
          </div>
          <div className="space-x-1">
            {data?.skills?.map((skill, i) => (
              <p
                key={i}
                className="inline-block rounded-full bg-[#B8BFCA4D] px-3 py-1 text-[11px] dark:text-white"
              >
                {skill}
              </p>
            ))}
          </div>

          {data?.additionalPhones?.length > 0 && (
            <div className="space-y-2  border-gray-100  text-[14px] dark:border-gray-700">
              <h4 className="font-bold">Additional Phone Number</h4>
              {data?.additionalPhones?.map((d) => (
                <p key={d?.id} className="opacity-70">{`${d?.dialCode ?? ""} ${
                  d?.fullNumber ?? ""
                }`}</p>
              ))}
            </div>
          )}

          {data?.bankAccounts?.length > 0 && (
            <div className="space-y-2 border-b border-gray-100 pb-3 text-[14px] dark:border-gray-700">
              <h4 className="font-bold">Bank Account | IBAN</h4>
              {data?.bankAccounts?.map((d) => (
                <div key={d?.id}>
                  <p className="opacity-70">{`Bank Name: ${
                    d?.bankName ?? ""
                  }`}</p>
                  <p className="opacity-70">{`Account Name: ${
                    d?.accountName ?? ""
                  }`}</p>
                  <p className="opacity-70">{`Account No: ${
                    d?.accountNo ?? ""
                  }`}</p>
                </div>
              ))}
            </div>
          )}
          <p class="whitespace-normal break-words text-center text-[12px] font-medium text-gray-400">
            {data?.bio}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-center gap-5 py-2 text-[24px] text-black">
          <Link to={`tel:${data?.phone}`} target="_blank">
            <FaPhoneAlt />
          </Link>
          <Link to={`https://wa.me/${data?.whatsapp}`} target="_blank">
            <FaWhatsapp size={28} />
          </Link>
          <Link to={`mailto:${data?.email}?subject=&body=`} target="_blank">
            <MdEmail size={28} />
          </Link>
          <Link
            to={`https://www.google.com/maps?q=${data?.location}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot size={28} />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setModalType("addContact")}
            className="rounded-lg bg-lemon-100 px-3 py-1 text-[10px] font-bold text-black"
          >
            Add to Your Contact
          </button>
          <button
            onClick={() => setModalType("exchangeContact")}
            className="rounded-lg bg-green-500 px-3 py-1 text-[10px] font-bold text-black"
          >
            Exchange Contact
          </button>
        </div>
      </div>

      {data?.youtubeVideo && (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            background: "#000",
            borderRadius: "10px",
          }}
        >
          <iframe
            title="YouTube video"
            src={`https://www.youtube.com/embed/${data?.youtubeVideo}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* {link && (
        <div>
          <Button link={link} className="w-full py-3 text-center text-[16px]">
            Edit Profile
          </Button>
        </div>
      )} */}

      <SocialLinks
        data={data?.social}
        additionalSocialLinks={data?.additionalSocialLinks}
      />

      {modalType === "addContact" && (
        <DialogModal
          title={"Add to Your Contact"}
          width="450"
          onClose={onClose}
        >
          <div className="flex items-center justify-center gap-4">
            <div>
              <div className="flex items-center justify-center pt-4">
                <Link to="/contacts/create" className="text-green-500">
                  <FaSquarePhone size={60} />
                </Link>
              </div>
              <p className="pt-2 text-center text-[12px] font-bold text-black">
                Add Contact
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center pt-4">
                <Link to={downloadLink} className="text-green-500">
                  <FaSquarePhone size={60} />
                </Link>
              </div>
              <p className="pt-2 text-center text-[12px] font-bold text-black">
                Phone Contact
              </p>
            </div>
          </div>
        </DialogModal>
      )}

      {modalType === "exchangeContact" && (
        <DialogModal
          title={"Exchange Your Contact"}
          width="500"
          onClose={onClose}
        >
          <ExchangeModal />
        </DialogModal>
      )}
    </div>
  );
};

export default CardView;
