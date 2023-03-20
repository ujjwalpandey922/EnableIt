import { useState } from "react";
import "./card.css";
import Model from "./Model";

const Card = ({ individualInfo }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card-content card" onClick={() => setOpen(true)}>
        <span>{individualInfo.ID}</span>
        <span>{individualInfo.FirstNameLastName}</span>
        <span>{individualInfo.JobTitle}</span>
        <hr />
        <button className="btn read">Read More...</button>
        
      </div>
      {open && <Model setOpen={setOpen} individualInfo={individualInfo} />}
    </>
  );
};

export default Card;
