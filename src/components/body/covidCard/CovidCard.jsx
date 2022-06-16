import React from "react";
import "./covidCard.scss";
import SmallCovidCard from "./SmallCovidCard";
import {FiPhoneCall} from "react-icons/fi"
import {BsChatLeftText} from "react-icons/Bs"
import {TbVaccine} from "react-icons/Tb"
import {RiQuestionAnswerLine} from "react-icons/Ri"


const CovidCard = () => {
  return (
    <div className="mainCovidCard">
      <div className="covidCard">
        <div className="covidHeading">
          <p>For COVID-19 Vaccination related queries</p>
        </div>
        <div className="covidContainer">
          <SmallCovidCard para="FAQs & Articles" img={<RiQuestionAnswerLine />} />
          <SmallCovidCard para="Vaccination Queries" img={<FiPhoneCall />} />
          <SmallCovidCard para="Chat with us" img={<BsChatLeftText />} />
          <SmallCovidCard para="Cowin Registration" img={<TbVaccine />} />
        </div>
      </div>
    </div>
  );
};

export default CovidCard;
