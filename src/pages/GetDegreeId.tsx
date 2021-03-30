import axios from "axios";
import React, { useEffect, useState } from "react";
import GetCredBanner from "../components/GetCredBanner/GetCredBanner";
import GetCredInfo, {
  GetCredInfoProps,
} from "../components/GetCredInfo/GetCredInfo";
import GetCredMenu, {
  GetCredMenuProps,
} from "../components/GetCredMenu/GetCredMenu";
import GetCredReceive from "../components/GetCredReceive/GetCredReceive";
import GetCredShare from "../components/GetCredShare/GetCredShare";
import GetCredVerifying from "../components/GetCredVerifying/GetCredVerifying";
import { degreeIdCard } from "../constants";

function GetDegreeId() {
  const [activeIdx, setActiveIdx] = useState(0);

  const [prImageUrl, setPrImageUrl] = useState("");

  const [shareStatus, setShareStatus] = useState(false);

  const [credImageUrl, setCredImageUrl] = useState("");

  useEffect(() => {
    axios.get("https://flexland-backend.flexfintx.com/degree/pr").then((response) => {
      setPrImageUrl(response.data.qrcode);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (!shareStatus) {
        axios.get("https://flexland-backend.flexfintx.com/degree/poll").then((response) => {
          if (response.status === 200) {
            setShareStatus(true);
          }
        });
      }
    }, 2000);
  }, []);

  useEffect(() => {
    if (shareStatus) {
      axios.post("https://flexland-backend.flexfintx.com/degree/cred").then((response) => {
        setCredImageUrl(response.data.qrcode);
      });
    }
  }, [shareStatus]);

  function incrementIdx() {
    if (activeIdx < degreeMenuProps.menuItems.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.href =
        "/seeyou?from=University of FlexLand&to=FlexLand Dashboard&url=";
    }
  }

  const degreeMenuProps: GetCredMenuProps = {
    label: degreeIdCard.idType,
    menuItems: ["Degree", "Share City ID", "Get Verified", "Receive Degree"],
    activeIdx: 0,
  };

  const degreeInfoProps: GetCredInfoProps = {
    title: "Get a digital verification of your Diploma",
    contentItems: [
      "Share your educational information easily in your job interview or when you apply to a post-graduate program.",
      "Get discounts or free access to services and programs all around the world.",
    ],
    shareString: "The University of FlexLand will ask you to share:",
    toShare: degreeIdCard.toShare,
    incrementFn: incrementIdx,
  };

  function showScreen() {
    if (activeIdx === 0) {
      return (
        <GetCredInfo
          title={degreeInfoProps.title}
          contentItems={degreeInfoProps.contentItems}
          shareString={degreeInfoProps.shareString}
          toShare={degreeInfoProps.toShare}
          incrementFn={degreeInfoProps.incrementFn}
        />
      );
    } else if (activeIdx === 1) {
      return (
        <GetCredShare
          toShare={degreeIdCard.toShare}
          shareStatus={shareStatus}
          imageUrl={prImageUrl}
          incrementFn={incrementIdx}
        />
      );
    } else if (activeIdx === 2) {
      return (
        <GetCredVerifying
          name={degreeIdCard.title}
          incrementFn={incrementIdx}
        />
      );
    } else {
      return (
        <GetCredReceive
          idType={degreeIdCard.idType}
          imageUrl={credImageUrl}
          incrementFn={incrementIdx}
        />
      );
    }
  }

  return (
    <>
      <GetCredBanner
        imageUrl={degreeIdCard.imageUrl}
        title={degreeIdCard.title}
      />
      <div className="columns">
        <div className="column is-one-quarter">
          <GetCredMenu
            label={degreeMenuProps.label}
            menuItems={degreeMenuProps.menuItems}
            activeIdx={activeIdx}
          />
        </div>
        <div className="column is-half">{showScreen()}</div>
      </div>
    </>
  );
}

export default GetDegreeId;
