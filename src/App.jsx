import { useState } from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Experience from "./components/Experience";
import Education from "./components/Education";

const person = {
  first_name: "Warren",
  last_name: "Miraflor",
  jobclass: "Software Developer",
  bday: "06/21/1995",
  age: "28",
  address: "943 Estrada Street · Malate, Manila 1004 · +63936 557 9373 ·",
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
    job_period: "March 2021 - Present",
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
    job_period: "August 2020 - March 2021",
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
    job_period: "April 2018 - June 2018",
    job_company: "Far Eastern University - NRMF",
    job_desc_1:
      "Basic  network configuration and maintain existing applications.",
    job_desc_2: "Web Development using PHP & MySQL.",
    job_desc_3:
      "Engage with office users to gather feedback and address their requests.",
    job_desc_4: "Provide support and assistance for programs and events.",
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
      <div class="container-fluid p-0">
        {/* The Grid */}
        <section class="resume-section" id="about">
          {/* About */}
          <Profile
            first_name={person.first_name}
            last_name={person.last_name}
            email={person.email}
            description={person.description}
            picture_file_loc={person.picture_file_loc}
            jobclass={person.jobclass}
            bday={person.bday}
            age={person.age}
            address={person.address}
          />
        </section>
        <hr class="m-0" />
        {/* Experience */}
        <section class="resume-section" id="experience">
          <Experience experience={experience} />
        </section>
        <hr class="m-0" />
        {/*Education*/}
        <section class="resume-section" id="education">
          <Education education={education} />
        </section>
        <hr class="m-0" />
        {/* Skills*/}
        <section class="resume-section" id="skills">
          <Skills skills={person.skills} />
        </section>
      </div>
    </div>
  );
}

export default App;
