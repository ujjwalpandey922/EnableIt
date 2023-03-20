import "./model.css";

const Model = ({ setOpen, individualInfo }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="close" onClick={() => setOpen(false)}>
          X
        </div>
        <h2 style={{ textAlign: "center" }}>Personal Info.... </h2>
        <div className="model-content">
          <div className="smaller-info">
            <label>ID No:</label>
            <span>{individualInfo.ID}</span>
          </div>
          <div className="smaller-info">
            <label>Name :</label>
            <span>{individualInfo.FirstNameLastName}</span>
          </div>
          <div className="smaller-info">
            <label>Designation :</label>
            <span>{individualInfo.JobTitle}</span>
          </div>
          <div className="smaller-info">
            <label>Email :</label>
            <span>{individualInfo.Email}</span>
          </div>
          <div className="smaller-info">
            <label>Phone :</label>
            <span>{individualInfo.Phone}</span>
          </div>
          <div className="smaller-info">
            <label>Company :</label>
            <span>{individualInfo.Company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
