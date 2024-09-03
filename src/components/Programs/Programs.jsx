import React from "react";
import "./Programs.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import program1logo from "../../assets/program1logo.png";
import program2logo from "../../assets/program2logo.png";
import program3logo from "../../assets/program3logo.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="program1 pic" />
        <div className="caption">
          <img src={program1logo} alt=""/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="program2 pic" />
        <div className="caption">
          <img src={program2logo} alt=""/>
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="program3 pic" />
        <div className="caption">
          <img src={program3logo} alt=""/>
          <p>PHD Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
