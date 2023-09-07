import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import experience from "../data/experience";

function Experience() {
  const returnIcon = (type) => {
    if(type === "vertical-timeline-element--work") {
      return <WorkIcon />
    } else {
      return <SchoolIcon />
    }
  }

  const getExperience = (experienceArray) => {
    let retValue = experienceArray.map((item,i) =>
        (
          <VerticalTimelineElement
          key={item.title}
          className={item.className}
          date={item.date}
          iconStyle={{ background: item.background, color: item.color }}
          icon={returnIcon(item.className)}
        >
          <h3 className="vertical-timeline-element-title">
          {item.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          {item.subtitle}
          </h4>
          <p>
          {item.description}
          </p>
        </VerticalTimelineElement>
        )
      )
    return retValue;
  }
  
  return (
    <div className="experience" style={{background: "#F5F5F5"}}>
      <VerticalTimeline lineColor="#3e497a">
      {getExperience(experience)}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
