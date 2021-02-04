import React, { useState } from 'react';
import GetCredBanner from '../components/GetCredBanner/GetCredBanner';
import GetCredInfo, { GetCredInfoProps } from '../components/GetCredInfo/GetCredInfo';
import GetCredMenu, { GetCredMenuProps } from '../components/GetCredMenu/GetCredMenu';
import GetCredReceive from '../components/GetCredReceive/GetCredReceive';
import GetCredShare from '../components/GetCredShare/GetCredShare';
import GetCredVerifying from '../components/GetCredVerifying/GetCredVerifying';

import { insuranceCoverage, sampleCredential } from "../constants"

function GetInsuranceId() {
  const [activeIdx, setActiveIdx] = useState(0);

  function incrementIdx() {
    if (activeIdx < insuranceMenuProps.menuItems.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.href = "/seeyou?from=We Care Pvt Ltd&to=FlexLand Dashboard&url="
    }
  }

  const insuranceMenuProps: GetCredMenuProps = {
    label: insuranceCoverage.idType,
    menuItems: ["Insurance Coverage", "Share Your Credentials", "Get Verified", "Receive Insurance Coverage ID"],
    activeIdx: 0
  }

  const insuranceInfoProps: GetCredInfoProps = {
    title: "Get your insurance",
    contentItems: [
      "ABC",
      "DEF"
    ],
    shareString: "We Care Pvt Ltd will ask you to share:",
    toShare: insuranceCoverage.toShare,
    incrementFn: incrementIdx
  }

  function showScreen() {
    if (activeIdx === 0) {
      return (
        <GetCredInfo title={insuranceInfoProps.title} contentItems={insuranceInfoProps.contentItems} shareString={insuranceInfoProps.shareString} toShare={insuranceInfoProps.toShare} incrementFn={insuranceInfoProps.incrementFn} />
      )
    } else if (activeIdx === 1) {
      return (<GetCredShare toShare={insuranceCoverage.toShare} imageUrl={sampleCredential} incrementFn={incrementIdx} />)
    } else if (activeIdx === 2) {
      return (<GetCredVerifying name={insuranceCoverage.title} incrementFn={incrementIdx} />)
    } else {
      return (<GetCredReceive idType={insuranceCoverage.idType} imageUrl={sampleCredential} incrementFn={incrementIdx} />)
    }
  }

  return (
    <>
      <GetCredBanner imageUrl={insuranceCoverage.imageUrl} title={insuranceCoverage.title} />
      <div className="columns">
        <div className="column is-one-quarter">
          <GetCredMenu label={insuranceMenuProps.label} menuItems={insuranceMenuProps.menuItems} activeIdx={activeIdx} />
        </div>
        <div className="column is-half">
          {showScreen()}
        </div>
      </div>
    </>
  )
}

export default GetInsuranceId;