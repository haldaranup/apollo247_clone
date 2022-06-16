import React from "react";
import SmallCovidCard from "./covidCard/SmallCovidCard";
import "./resources.scss";
import { BsChatLeftText } from "react-icons/Bs";
import ResourceBox from "./ResourceBox";
const Resources = () => {
  return (
    <div className="mainResources">
      <div className="resourceContainer">
        <div className="bgImage">
          <div>
            <h2>HEALTH ARTICLES & RESOURCES</h2>
            <p>
              Make better health choices with our curated blogs, videos and
              expert advice.
            </p>
          </div>
          <div>
            <img
              src="https://newassets.apollo247.com/images/h-medicine.svg"
              alt=""
            />
          </div>
        </div>
        <div className="midResourcesContainer">
          <div className="midResource">
            <div className="midTextContent">
              <h6>HEALTH BLOG</h6>
              <p>
                Explore healthcare content created every day by our experts.
              </p>
            </div>
            <div>
              <SmallCovidCard
                img={<BsChatLeftText />}
                para={"Read the Latest Articles"}
              />
            </div>
          </div>

          <div className="dottedLine">
            <div></div>
          </div>

          <div className="lastResource">
            <div>
              <p>YOU CAN ALSO</p>
            </div>

            <div className="resouceBoxContainer">
              <ResourceBox
                para={"Health-tools"}
                img={
                  "https://newassets.apollo247.com/images/ic_psychologist.svg"
                }
              />
              <ResourceBox
                para={"Explore HealthyLife"}
                img={"https://assets.apollo247.com/images/ic_healthy_life.png"}
              />
              <ResourceBox
                para={"Explore the Apollo Kavach Program"}
                img={"https://newassets.apollo247.com/images/apollo-kavach.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
