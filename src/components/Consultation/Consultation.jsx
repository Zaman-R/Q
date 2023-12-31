import React from "react";

// Import CSS
import "./consultation.css";

// Import local components
import ConsultationCard from "../ConsultationCard/ConsultationCard";

// import local images
import GeneralPhysicianIcon from "../../assets/medical-assistance.png";
import PillIcon from "../../assets/pill.png";
import PsychiatryIcon from "../../assets/psychology.png";
import NutritionIcon from "../../assets/diet.png";
import GynaeIcon from "../../assets/woman-avatar.png";
import PediatricsIcon from "../../assets/baby.png";
import PsychologyIcon from "../../assets/brain.png";
import UrologyIcon from "../../assets/kidneys.png";
import DermatologyIcon from "../../assets/hand.png";
import GastroIcon from "../../assets/stomach.png";
import OrthopedicsIcon from "../../assets/bone.png";
import OpthamologyIcon from "../../assets/eye.png";

const Categories = () => {
  return (
    <div>
      <div className="consultation__wrapper">
        <div className="consultation">
          <h1 className="consultation__title font-bold text-2xl">Please select a speciality</h1>

          {/* Cards  */}
          <div className="consultation__cards">
            <div className="consultation-row">
              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={GeneralPhysicianIcon}
                  title={"General Physician"}
                  description={
                    "Cold flu, fever, vomitting, infections, headaches or any other general health issues."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={GynaeIcon}
                  title={"Gynae & Obs"}
                  description={
                    "Any women's health related issues including pregnancy, menstruation, fertility issues, hormone disorders etc."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={DermatologyIcon}
                  title={"Dermatology"}
                  description={
                    "Treatment of diseases related to skin, hair and nails and some cosmetic problems."
                  }
                />
              </div>
            </div>

            <div className="consultation-row">
              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={PillIcon}
                  title={"Internal Medicine"}
                  description={
                    "Prevention, diagnosis, and treatment of adults across the spectrum from health to complex illness."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={PediatricsIcon}
                  title={"Pediatrics"}
                  description={
                    "Any children's health related issues including physical, behavior and mental health."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={GastroIcon}
                  title={"Gastroenterology"}
                  description={
                    "Diseases affecting the gastrointestinal tract, which include the organs from mouth into anus, along the alimentary canal."
                  }
                />
              </div>
            </div>

            <div className="consultation-row">
              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={PsychiatryIcon}
                  title={"Psychiatry"}
                  description={
                    "Diagnosis, preventation, and treatment of mental disorders related to mood, behaviour, congnition, and perceptions."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={PsychologyIcon}
                  title={"Psychology"}
                  description={
                    "Identify and diagnose mental, behavioral, and emotional disorders."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={OrthopedicsIcon}
                  title={"Orthopedics"}
                  description={"Bones, muscles, joints, tendons, ligaments."}
                />
              </div>
            </div>
            <div className="consultation-row">
              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={NutritionIcon}
                  title={"Nutrition & Food Science"}
                  description={
                    "Weight management, health & wellness, overall well being."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={UrologyIcon}
                  title={"Urology"}
                  description={
                    "Diagnosis and treatment of diseases of the male and female urinary-tract system."
                  }
                />
              </div>

              <div className="consultation-col">
                {" "}
                <ConsultationCard
                  img={OpthamologyIcon}
                  title={"Ophthalmology"}
                  description={"Diagnosis, treatment of eye disorders."}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
