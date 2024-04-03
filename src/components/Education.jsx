export default function Education({ education }) {
  return (
    <div>
      {education.map((study) => (
        <div
          key={study.course}
          className="w3-container w3-card w3-white w3-round w3-margin"
        >
          <div>
            <span className="w3-right w3-opacity" style={{ marginTop: "5px" }}>
              {study.year}
            </span>
            <h6>
              <b>{study.course}</b>
            </h6>
            <h6>{study.school}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
