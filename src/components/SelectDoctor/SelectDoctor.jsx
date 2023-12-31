import { React, useState } from "react";

// import CSS
import "./selectDoctor.css";

// import doctors data
import doctorsList from "./doctorsList";

// Import local componenets
import DoctorCard from "../DoctorCard/DoctorCard";

const SelectDoctor = () => {
  // Handle doctor name search
  const [nameSearch, setNameSearch] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  console.log(nameSearch, selectedArea, selectedHospital);

  return (
    <>
      {/* Filtering component  */}
      <div className="select-doctors__wrapper">
        <form>
          {/* Area select filtering  */}
          <div className="selectors-container">
            <label className="select-label">Area</label> <br></br>
            <select
              name="area"
              className="area-select custom-select"
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option value="">Select an area</option>
              <option value="Shahbag, Dhaka, Bangladesh">
                Shahbag, Dhaka, Bangladesh
              </option>
              <option value="Panthapath, Dhaka, Bangladesh">
                Panthapath, Dhaka, Bangladesh
              </option>
              <option value="Bashundhara R/A, Dhaka, Bangladesh">
                Bashundhara R/A, Dhaka, Bangladesh
              </option>
              <option value="Dhanmondi, Dhaka, Bangladesh">
                Dhanmondi, Dhaka, Bangladesh
              </option>
              <option value="Gulshan, Dhaka, Bangladesh">
                Gulshan, Dhaka, Bangladesh
              </option>
            </select>
          </div>
          {/* Hospitals Filtering  */}
          <div className="selectors-container">
            <label className="select-label">Hospital</label> <br></br>
            <select
              name="hospital"
              className="hospital-select custom-select"
              onChange={(e) => setSelectedHospital(e.target.value)}
            >
              <option value="">Select a hospital</option>
              <option value="Dhaka Medical College Hospital">
                Dhaka Medical College Hospital
              </option>
              <option value="Square Hospitals Ltd.">
                Square Hospitals Ltd.
              </option>
              <option value="Bangabandhu Sheikh Mujib Medical University Hospital">
                Bangabandhu Sheikh Mujib Medical University Hospital
              </option>
              <option value="Apollo Hospitals Dhaka">
                Apollo Hospitals Dhaka
              </option>
              <option value="Labaid Hospital">Labaid Hospital</option>
              <option value="United Hospital">United Hospital</option>
            </select>{" "}
            <br></br>
          </div>

          {/* Doctor name filtering  */}
          <div className="selectors-container">
            <label className="select-label">Doctor name</label>
            <br></br>
            <input
              type="text"
              id="doctorSearch"
              className="doctor-search"
              name="doctorSearch"
              placeholder="Doctor's name..."
              onChange={(e) => setNameSearch(e.target.value)}
            ></input>
          </div>
        </form>

        {/* Doctor Cards  */}
        <div className="doctor-cards">
          {doctorsList.hospitals.map((hospital, key) => {
            return hospital.doctors
              .filter((doctor) => {
                const nameMatched =
                  nameSearch === "" ||
                  doctor.name.toLowerCase().includes(nameSearch.toLowerCase());
                const areaMatched =
                  selectedArea === "" || hospital.hospitalArea === selectedArea;
                const hospitalMatched =
                  selectedHospital === "" ||
                  hospital.hospitalName === selectedHospital;
                console.log(nameMatched, areaMatched, hospitalMatched);
                return nameMatched && areaMatched && hospitalMatched;
              })
              .map((doctor, key) => (
                <DoctorCard
                  key={key}
                  hospitalName={hospital.hospitalName}
                  hospitalArea={hospital.hospitalArea}
                  doctor={doctor}
                />
              ));
          })}
        </div>
      </div>
    </>
  );
};

export default SelectDoctor;
