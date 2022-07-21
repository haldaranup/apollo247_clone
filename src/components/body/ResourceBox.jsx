import React from "react";

const ResourceBox = ({ img, para }) => {
  return (
    <div className="resourceBox">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default ResourceBox;
