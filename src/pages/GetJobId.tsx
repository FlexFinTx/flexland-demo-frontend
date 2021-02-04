import React, { useState } from "react";
import GetCredBanner from "../components/GetCredBanner/GetCredBanner";
import GetCredInfo, { GetCredInfoProps } from "../components/GetCredInfo/GetCredInfo";
import GetCredMenu, { GetCredMenuProps } from "../components/GetCredMenu/GetCredMenu";
import GetCredReceive from "../components/GetCredReceive/GetCredReceive";
import GetCredShare from "../components/GetCredShare/GetCredShare";
import GetCredVerifying from "../components/GetCredVerifying/GetCredVerifying";
import { jobCard, sampleCredential, samplePresentationRequest } from "../constants"

function GetJobId() {

  const [activeIdx, setActiveIdx] = useState(0);

  function incrementIdx() {
    if (activeIdx < jobMenuProps.menuItems.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.href = "/seeyou?from=Acme Corp&to=FlexLand Dashboard&url=";
    }
  }

  const jobMenuProps: GetCredMenuProps = {
    label: jobCard.idType,
    menuItems: ["Employment Verification", "Share Your Credentials", "Get Verified", "Receive Employment Verification ID"],
    activeIdx: 0,
  }

  const jobInfoProps: GetCredInfoProps = {
    title: "Get a digital verification of your Employment Verification",
    contentItems: [
      "Share your employment information easily while you're applying for a mortgage or signing a new lease",
      "Provide a verified employment history during your job interview"
    ],
    shareString: "Acme Corp will ask you to share:",
    toShare: jobCard.toShare,
    incrementFn: incrementIdx,
  }

  function showScreen() {
    if (activeIdx === 0) {
      return (
        <GetCredInfo title={jobInfoProps.title} contentItems={jobInfoProps.contentItems} shareString={jobInfoProps.shareString} toShare={jobInfoProps.toShare} incrementFn={jobInfoProps.incrementFn} />
      )
    } else if (activeIdx === 1) {
      return (<GetCredShare toShare={jobCard.toShare} imageUrl={samplePresentationRequest} incrementFn={incrementIdx} />)
    } else if (activeIdx === 2) {
      return (<GetCredVerifying name={jobCard.title} incrementFn={incrementIdx} />)
    } else {
      return (<GetCredReceive idType={jobCard.idType} imageUrl={sampleCredential} incrementFn={incrementIdx} />)
    }
  }

  return (
    <>
      <GetCredBanner imageUrl={jobCard.imageUrl} title={jobCard.title} />
      <div className="columns">
        <div className="column is-one-quarter">
          <GetCredMenu label={jobMenuProps.label} menuItems={jobMenuProps.menuItems} activeIdx={activeIdx} />
        </div>
        <div className="column is-half">
          {showScreen()}
        </div>
      </div>
    </>
  )
}

export default GetJobId;