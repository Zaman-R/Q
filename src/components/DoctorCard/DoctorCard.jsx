import React from "react";

// import css
import "./doctorCard.css";

// import icons
import RightArrowIcon from "../../assets/right-arrow.png";
import { NavLink } from "react-router-dom";

const DoctorCard = ({ hospitalName, hospitalArea, doctor }) => {
  return (
    <div>
      <div className="doctor-card__wrapper doctor-card__row">
        {/* <div className="inner-row"> */}
        <div className="p-lr doctor-card__col ">
          <p className="doctor-card__name">{doctor.name}</p>
          <p className="doctor-card__degree">{doctor.degree}</p>
          <p className="doctor-card__label">Specialities</p>
          <p className="doctor-card__speciality">{doctor.speciality}</p>
        </div>

        <div className="p-lr doctor-card__col">
          <p className="doctor-card__label">Working in</p>
          <p className="doctor-card__hospital-name">{hospitalName}</p>
          <p className="doctor-card__label">Total Experience</p>
          <p className="doctor-card__total-experience">
            {doctor.totalExperience}
          </p>
        </div>
        {/* </div> */}


        <NavLink to={"/consultation/select_doctor/askforappoitment"} className="p-lr doctor-card__fee doctor-card__col">
          <div className="doctor-card__fee__col">
            <p>
              <span className="doctor-fee">
                &#2547; {parseInt(doctor.totalExperience) * 50}
              </span>{" "}
              <span className="doctor-card__fee__vat">(Incl. VAT)</span>
            </p>
            <p className="doctor-card__per-consultation">Per consultation</p>
          </div>

          <img
            src={RightArrowIcon}
            alt="Right arrow icon"
            className="right-arrow-icon doctor-card__fee__col"
          />
        </NavLink>

      </div>
    </div>
  );
};

export default DoctorCard;
