import React from "react";
import FlowCard from "../FlowCard/FlowCard";
import StepCards from "../StepCards/StepCards";

import {
  cityIdCard,
  degreeIdCard,
  jobCard,
  busPass,
  insuranceCoverage,
  healthId,
} from "../../constants";

function Instructions() {
  return (
    <section className="section has-background-light">
      <div className="container is-fullhd">
        <div className="content">
          <StepCards />

          <br />
          <br />
          <FlowCard
            title={cityIdCard.title}
            url={cityIdCard.url}
            imageUrl={cityIdCard.imageUrl}
            idType={cityIdCard.idType}
            descriptionLine1={cityIdCard.descriptionLine1}
            descriptionLine2={cityIdCard.descriptionLine2}
            toShare={cityIdCard.toShare}
          />

          <br />
          <br />
          <FlowCard
            title={degreeIdCard.title}
            url={degreeIdCard.url}
            imageUrl={degreeIdCard.imageUrl}
            idType={degreeIdCard.idType}
            descriptionLine1={degreeIdCard.descriptionLine1}
            descriptionLine2={degreeIdCard.descriptionLine2}
            toShare={degreeIdCard.toShare}
          />

          <br />
          <br />
          <FlowCard
            title={jobCard.title}
            url={jobCard.url}
            imageUrl={jobCard.imageUrl}
            idType={jobCard.idType}
            descriptionLine1={jobCard.descriptionLine1}
            descriptionLine2={jobCard.descriptionLine2}
            toShare={jobCard.toShare}
          />

          <br />
          <br />
          <FlowCard
            title={busPass.title}
            url={busPass.url}
            imageUrl={busPass.imageUrl}
            idType={busPass.idType}
            descriptionLine1={busPass.descriptionLine1}
            descriptionLine2={busPass.descriptionLine2}
            toShare={busPass.toShare}
          />

          <br />
          <br />
          <FlowCard
            title={insuranceCoverage.title}
            url={insuranceCoverage.url}
            imageUrl={insuranceCoverage.imageUrl}
            idType={insuranceCoverage.idType}
            descriptionLine1={insuranceCoverage.descriptionLine1}
            descriptionLine2={insuranceCoverage.descriptionLine2}
            toShare={insuranceCoverage.toShare}
          />

          <br />
          <br />
          <FlowCard
            title={healthId.title}
            url={healthId.url}
            imageUrl={healthId.imageUrl}
            idType={healthId.idType}
            descriptionLine1={healthId.descriptionLine1}
            descriptionLine2={healthId.descriptionLine2}
            toShare={healthId.toShare}
          />
        </div>
      </div>
    </section>
  );
}

export default Instructions;
