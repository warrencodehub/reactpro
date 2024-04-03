export default function Experience({ experience }) {
  return (
    <div>
      {experience.map((job) => (
        <div
          key={job.job_position}
          className="w3-container w3-card w3-white w3-round w3-margin"
        >
          <div>
            <span className="w3-right w3-opacity" style={{ marginTop: "5px" }}>
              {job.job_period}
            </span>
            <h6>
              <b>{job.job_position}</b>
            </h6>
            <h6>{job.job_company}</h6>
            <hr className="w3-clear"></hr>
            <ul>
              <li key={job.job_desc_1}>{job.job_desc_1}</li>
              <li key={job.job_desc_2}>{job.job_desc_2}</li>
              <li key={job.job_desc_3}>{job.job_desc_3}</li>
              <li key={job.job_desc_4}>{job.job_desc_4}</li>
            </ul>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
}
