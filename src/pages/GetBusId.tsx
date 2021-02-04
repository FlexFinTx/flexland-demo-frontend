import React, { useState } from "react";
import GetCredBanner from "../components/GetCredBanner/GetCredBanner";
import GetCredInfo, { GetCredInfoProps } from "../components/GetCredInfo/GetCredInfo";
import GetCredMenu, { GetCredMenuProps } from "../components/GetCredMenu/GetCredMenu";
import GetCredReceive from "../components/GetCredReceive/GetCredReceive";
import GetCredShare from "../components/GetCredShare/GetCredShare";
import GetCredVerifying from "../components/GetCredVerifying/GetCredVerifying";

import { busPass, sampleCredential, samplePresentationRequest } from "../constants"

function GetBusId() {

  const [activeIdx, setActiveIdx] = useState(0);

  function incrementIdx() {
    if (activeIdx < busMenuProps.menuItems.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.href = "/seeyou?from=FlexLand City Transit&to=FlexLand Dashboard&url="
    }
  }

  const busMenuProps: GetCredMenuProps = {
    label: busPass.idType,
    menuItems: ["Bus Pass", "Share Your Credentials", "Get Verified", "Receive Bus Pass"],
    activeIdx: 0
  }

  const busInfoProps: GetCredInfoProps = {
    title: "Get your bus pass",
    contentItems: [
      "ABC",
      "DEF"
    ],
    shareString: "FlexLand City Transit will ask you to share:",
    toShare: busPass.toShare,
    incrementFn: incrementIdx
  }

  function showScreen() {
    if (activeIdx === 0) {
      return (
        <GetCredInfo title={busInfoProps.title} contentItems={busInfoProps.contentItems} shareString={busInfoProps.shareString} toShare={busInfoProps.toShare} incrementFn={busInfoProps.incrementFn} />
      )
    } else if (activeIdx === 1) {
      return (<GetCredShare toShare={busPass.toShare} imageUrl={samplePresentationRequest} incrementFn={incrementIdx} />)
    } else if (activeIdx === 2) {
      return (<GetCredVerifying name={busPass.title} incrementFn={incrementIdx} />)
    } else {
      return (<GetCredReceive idType={busPass.idType} imageUrl={sampleCredential} incrementFn={incrementIdx} />)
    }
  }

  return (
    <>
      <GetCredBanner imageUrl={busPass.imageUrl} title={busPass.title} />
      <div className="columns">
        <div className="column is-one-quarter">
          <GetCredMenu label={busMenuProps.label} menuItems={busMenuProps.menuItems} activeIdx={activeIdx} />
        </div>
        <div className="column is-half">
          {showScreen()}
        </div>
      </div>
    </>
  )
}

export default GetBusId;