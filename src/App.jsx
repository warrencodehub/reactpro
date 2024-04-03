import { useState } from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Experience from "./components/Experience";
import Education from "./components/Education";

const person = {
  name: "Warren Miraflor",
  jobclass: "Software Developer",
  bday: "06/21/1995",
  age: "28",
  address: "943 Estrada St. Malate Manila",
  contactno: "09365579373",
  email: "warrenmrflr@gmail.com",
  skills: ["SQL", "TSQL", "HTML", "Javascript", "PHP"],
  description:
    '"I am a Software Developer with holistic knowledge of software development and proven knowledge in creating and designing software in a test-driven environment and agile software methodology."',
  picture_file_loc: "./images/warren_art.jpeg",
};

const experience = [
  {
    job_position: "Software Developer",
    job_period: "06/2022 - Current",
    job_company: "Hartmann Crew Philippines, Hartmann Global IT",
    job_desc_1:
      "Transform legacy application 'Crew Management System' into a cloud application called 'Crew Management System Cloud', using 'Thinkwise' low code software.",
    job_desc_2:
      "Develop and maintain 'HIS mobile app' or 'Hartmann Information System mobile app', using 'Thinkwise' low code software.",
    job_desc_3:
      "Develop and maintain 'Master Database' software that is akin to a 'Shareholder management tool' , using 'Thinkwise' low code software.",
    job_desc_4:
      "Provide training on low code platform utilization and proficiency in SQL and T-SQL, while concurrently managing and guiding team members.",
  },
  {
    job_position: "Software Developer",
    job_period: "01/2020 - 06/2022",
    job_company: "Hartmann Crew Philippines",
    job_desc_1:
      "Maintain and enhance 'Training Information System', A system that handles a crew training registration up to certification. This is written with C# and SQL.",
    job_desc_2:
      "Engage with office users to gather feedback and address their requests.",
    job_desc_3:
      "Create documentations for current decade old applications candidate for future transformation, for future developers",
    job_desc_4: "Create proof of concepts for the company for future use.",
  },
  {
    job_position: "Software Developer (Intern)",
    job_period: "04/2018 - 06/2018",
    job_company: "Far Eastern University - NRMF",
    job_desc_1:
      "Basic  network configuration and maintain existing applications.",
    job_desc_2: "Web Development using PHP & MySQL.",
  },
];

const education = [
  {
    course: "Bachelor of Science Information Technology",
    school: "Polytechnic University of the Philippines",
    year: "2015 - 2020",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Page Container */}
      <div
        className="w3-container w3-content"
        style={{ maxWidth: "1400px", marginTop: "20px" }}
      >
        {/* The Grid */}
        <div className="w3-row">
          {/* Left Column */}
          <div className="w3-col m3">
            <Profile
              name={person.name}
              picture_file_loc={person.picture_file_loc}
              jobclass={person.jobclass}
              bday={person.bday}
              age={person.age}
              address={person.address}
            />
            <br />
            <Skills skills={person.skills} />
            <br />
            <Contact contactno={person.contactno} email={person.email} />
            <br />
          </div>
          {/* Middle Column */}
          <div className="w3-col m9">
            <Description description={person.description} />
            <Experience experience={experience} />
            <Education education={education} />
          </div>
        </div>
      </div>

      <footer className="w3-container w3-theme-d5">
        <p>
          I created this page with{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
            w3.css
          </a>{" "}
          and Vite + React
        </p>
      </footer>
    </div>
  );
}

export default App;
