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
import { healthId } from "../constants";

function GetHealthId() {
  const [activeIdx, setActiveIdx] = useState(0);

  const [prImageUrl, setPrImageUrl] = useState("");

  const [shareStatus, setShareStatus] = useState(false);

  const [credImageUrl, setCredImageUrl] = useState("");

  useEffect(() => {
    axios.get("https://flexland-backend.flexfintx.com/health/pr").then((response) => {
      setPrImageUrl(response.data.qrcode);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (!shareStatus) {
        axios.get("https://flexland-backend.flexfintx.com/health/poll").then((response) => {
          if (response.status === 200) {
            setShareStatus(true);
          }
        });
      }
    }, 2000);
  }, []);

  useEffect(() => {
    if (shareStatus) {
      axios.post("https://flexland-backend.flexfintx.com/health/cred").then((response) => {
        setCredImageUrl(response.data.qrcode);
      });
    }
  }, [shareStatus]);

  function incrementIdx() {
    if (activeIdx < healthMenuProps.menuItems.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.href =
        "/seeyou?from=St Generals Hospital&to=FlexLand Dashboard&url=";
    }
  }

  const healthMenuProps: GetCredMenuProps = {
    label: healthId.idType,
    menuItems: [
      "Health ID",
      "Share Your Credentials",
      "Get Verified",
      "Receive Health ID",
    ],
    activeIdx: 0,
  };

  const healthInfoProps: GetCredInfoProps = {
    title: "Get a digital Health ID",
    contentItems: ["ABC", "DEF"],
    shareString: "St. Generals Hospital will asks you to share:",
    toShare: healthId.toShare,
    incrementFn: incrementIdx,
  };

  function showScreen() {
    if (activeIdx === 0) {
      return (
        <GetCredInfo
          title={healthInfoProps.title}
          contentItems={healthInfoProps.contentItems}
          shareString={healthInfoProps.shareString}
          toShare={healthInfoProps.toShare}
          incrementFn={healthInfoProps.incrementFn}
        />
      );
    } else if (activeIdx === 1) {
      return (
        <GetCredShare
          toShare={healthId.toShare}
          shareStatus={shareStatus}
          imageUrl={prImageUrl}
          incrementFn={incrementIdx}
        />
      );
    } else if (activeIdx === 2) {
      return (
        <GetCredVerifying name={healthId.title} incrementFn={incrementIdx} />
      );
    } else {
      return (
        <GetCredReceive
          idType={healthId.idType}
          imageUrl={credImageUrl}
          incrementFn={incrementIdx}
        />
      );
    }
  }

  return (
    <>
      <GetCredBanner imageUrl={healthId.imageUrl} title={healthId.title} />
      <div className="columns">
        <div className="column is-one-quarter">
          <GetCredMenu
            label={healthMenuProps.label}
            menuItems={healthMenuProps.menuItems}
            activeIdx={activeIdx}
          />
        </div>
        <div className="column is-half">{showScreen()}</div>
      </div>
    </>
  );
}

export default GetHealthId;
