import axios from "axios";
import React, { useEffect, useState } from "react";
import EnterInfoForm from "../components/EnterInfoForm/EnterInfoForm";
import GetCredBanner from "../components/GetCredBanner/GetCredBanner";
import GetCredInfo, { GetCredInfoProps } from "../components/GetCredInfo/GetCredInfo";
import GetCredMenu, { GetCredMenuProps } from "../components/GetCredMenu/GetCredMenu";
import GetCredReceive from "../components/GetCredReceive/GetCredReceive";
import GetCredShare from "../components/GetCredShare/GetCredShare";
import GetCredVerifying from "../components/GetCredVerifying/GetCredVerifying";
import { cityIdCard } from "../constants"

export interface CitySubmitInfo {
  givenName: string;
  familyName: string;
  address: string;
  birthDate: string;
}

function GetCityId() {

  const [activeIdx, setActiveIdx] = useState(0);

  const [prImageUrl, setPrImageUrl] = useState("");

  const [shareStatus, setShareStatus] = useState(false);

  const [credImageUrl, setCredImageUrl] = useState("");

  const [submitInfo, setSubmitInfo] = useState<CitySubmitInfo>();

  useEffect(() => {
    axios.get("http://localhost:5000/did/pr").then(response => {
      setPrImageUrl(response.data.qrcode);
    })
  }, [])

  useEffect(() => {
    setInterval(() => {
      if (!shareStatus) {
      axios.get("http://localhost:5000/did/poll").then(response => {
        if (response.status === 200) {
          setShareStatus(true);
        }
      })
    }
    }, 2000)
  }, [])

  useEffect(() => {
    if (submitInfo) {
    console.log(submitInfo);
    axios.post("http://localhost:5000/city/cred", {
      ...submitInfo
    }).then(response => {
      setCredImageUrl(response.data.qrcode);
    })
  }

  }, [submitInfo])

  function incrementIdx(data?: any) {
    if (activeIdx < cityMenuProps.menuItems.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.href = "/seeyou?from=FlexLand City&to=FlexLand Dashboard&url=";
    }
  }

  const cityMenuProps: GetCredMenuProps = {
    label: cityIdCard.idType,
    menuItems: ["Login with FlexID", "City ID", "Enter Your Information", "Get Verified", "Receive City ID"],
    activeIdx: 0,
  }

  const cityInfoProps: GetCredInfoProps = {
    title: "Join thousands of fellow FlexLand citizens!",
    contentItems: [
      "Get things done without leaving your home. No more standing in lines.",
      "Access services and programs offered by the City",
      "Get a free one-year membership at many of the City's leading museums, zoos, concert halls, and botanical gardens"
    ],
    shareString: "The City of FlexLand will ask you to share:",
    toShare: cityIdCard.toShare,
    incrementFn: incrementIdx,
  }

  function showScreen() {
    if (activeIdx === 0) {
      return (<GetCredShare toShare={["DIDAuth"]} imageUrl={prImageUrl} shareStatus={shareStatus} incrementFn={incrementIdx} />)
    } else if (activeIdx === 1) {
      return (
        <GetCredInfo title={cityInfoProps.title} contentItems={cityInfoProps.contentItems} shareString={cityInfoProps.shareString} toShare={cityInfoProps.toShare} incrementFn={cityInfoProps.incrementFn} />
      );
    } else if (activeIdx === 2) {
      return (<EnterInfoForm incrementFn={incrementIdx} setFn={setSubmitInfo} />);
    } else if (activeIdx === 3) {
      return (<GetCredVerifying name={cityIdCard.title} incrementFn={incrementIdx} />)
    } else {
      return (<GetCredReceive idType={cityIdCard.idType} imageUrl={credImageUrl} incrementFn={incrementIdx} />)
    }
  }

  return (
    <>
      <GetCredBanner imageUrl={cityIdCard.imageUrl} title={cityIdCard.title} />
      <div className="columns">
        <div className="column is-one-quarter">
          <GetCredMenu label={cityMenuProps.label} menuItems={cityMenuProps.menuItems} activeIdx={activeIdx} />
        </div>
        <div className="column is-half">
          {showScreen()}
        </div>
      </div>
    </>
  )
}

export default GetCityId;