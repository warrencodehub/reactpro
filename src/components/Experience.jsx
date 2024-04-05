export default function Experience({ experience }) {
  return (
    <div>
      <h2 class="mb-5">Experience</h2>
      {experience.map((job) => (
        <div
          class="resume-section-content"
          key={job.job_position}
          className="w3-container w3-card w3-white w3-round w3-margin"
        >
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3>{job.job_position}</h3>
              <div class="subheading mb-3">{job.job_company}</div>
              <ul>
                <li key={job.job_desc_1}>{job.job_desc_1}</li>
                <li key={job.job_desc_2}>{job.job_desc_2}</li>
                <li key={job.job_desc_3}>{job.job_desc_3}</li>
                <li key={job.job_desc_4}>{job.job_desc_4}</li>
              </ul>
            </div>
            <div class="flex-shrink-0">
              <span className="text-primary" style={{ marginTop: "5px" }}>
                {job.job_period}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
