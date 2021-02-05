import React, { useState } from "react";
import { CitySubmitInfo } from "../../pages/GetCityId";

type EnterInfoFormProps = {
  incrementFn: (data?: any) => void;
  setFn: React.Dispatch<React.SetStateAction<CitySubmitInfo | undefined>>
}

function EnterInfoForm({ incrementFn, setFn }: EnterInfoFormProps) {


  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");

  return (
    <section className="section">
      <div className="field">
        <label className="label">Given Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="John" onChange={(e) => setGivenName(e.target.value)}/>
        </div>
      </div>

      <div className="field">
        <label className="label">Family Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Doe" onChange={(e) => setFamilyName(e.target.value)}/>
        </div>
      </div>

      <div className="field">
        <label className="label">Address</label>
        <div className="control">
          <input className="input" type="text" placeholder="123 St, Harare, Zimbabwe" onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>

      <div className="field">
        <label className="label">Date of Birth</label>
        <div className="control">
          <input className="input" type="text" placeholder="01-01-1999" onChange={(e) => setBirthDate(e.target.value)} />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary" onClick={() => {
            setFn({
              givenName,
              familyName,
              address,
              birthDate
            })
            incrementFn()
            }}>Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </section>
  )
}

export default EnterInfoForm;