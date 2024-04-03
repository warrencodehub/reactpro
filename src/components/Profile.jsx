import Pictures from "./Picture";

export default function Profile({
  name,
  picture_file_loc,
  jobclass,
  bday,
  age,
  address,
}) {
  // my birth date as a date
  let bdate = new Date(bday);
  // current date
  let cdate = new Date();
  // my birth day this year as string
  let cday =
    bdate.getMonth() + 1 + "/" + bdate.getDate() + "/" + cdate.getFullYear();
  // my birth day this year as date
  let cbdate = new Date(cday);
  // my current age
  let cage = cdate.getFullYear() - bdate.getFullYear();
  // if number of days between 04/02/2024 and 10/21/2024 is smaller than 0
  if (cdate - cbdate < 0) {
    cage = cage - 1;
  }
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <h4 className="w3-center">
          <b>{name}</b>
        </h4>
        <p className="w3-center">
          <Pictures picture_file_loc={picture_file_loc} />
        </p>
        <hr />
        <p>{jobclass}</p>
        <p className="w3-small">
          {bday}, {cage} yrs
        </p>
        <p className="w3-small">{address}</p>
      </div>
    </div>
  );
}
