import React from "react";

type EnterInfoFormProps = {
  incrementFn: (data?: any) => void;
}

function EnterInfoForm({ incrementFn }: EnterInfoFormProps) {
  return (
    <section className="section">
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="John" />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Doe" />
        </div>
      </div>

      <div className="field">
        <label className="label">Address</label>
        <div className="control">
          <input className="input" type="text" placeholder="123 St, Harare, Zimbabwe" />
        </div>
      </div>

      <div className="field">
        <label className="label">Date of Birth</label>
        <div className="control">
          <input className="input" type="text" placeholder="01-01-1999" />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary" onClick={() => incrementFn()}>Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </section>
  )
}

export default EnterInfoForm;