import React from "react";
import { useSelector } from "react-redux";
import { Student, StudentBg } from "../../assets/index";

const DashboardBanner = ({ completedQuiz, userData }) => {
  const user = useSelector((state) => state.user);

  return (
    <div
      style={{
        backgroundImage: `url(${StudentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "auto",
        width: "100%",
        padding: "18px",
        borderRadius: "30px",
        marginTop: "50px",
      }}
    >
      <div>
        <h1 className="text-white text-[42px] font-bold ">
          {`${user?.firstName || ""} ${user?.lastName || ""}`}
        </h1>
        <p className="text-white text-[28px] font-bold leading-9 ">
          You have complete {completedQuiz} quiz in last ten days.
          <br /> Start Your learning today!
        </p>
      </div>
      <div className="mt-[-90px] pl-40">
        <img src={Student} alt="Student" />
      </div>
    </div>
  );
};

export default DashboardBanner;
