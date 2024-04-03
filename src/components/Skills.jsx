export default function Skills({ skills }) {
  return (
    <div className="w3-card w3-round w3-white ">
      <div className="w3-container">
        <p>Skills</p>
        <p>
          {skills.map((skill, index) => (
            <span className={"w3-small w3-theme-d" + (index + 1)} key={skill}>
              {skill} <span> </span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
