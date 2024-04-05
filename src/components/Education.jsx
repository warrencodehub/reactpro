export default function Education({ education }) {
  return (
    <div class="resume-section-content">
      <h2 class="mb-5">Education</h2>
      {education.map((study) => (
        <div
          key={study.course}
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">{study.school}</h3>
            <div>{study.course}</div>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary"> {study.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
