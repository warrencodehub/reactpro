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
  address: "Blk 22 Lot 19 Villa Ana Maria · Rodriguez, Rizal 1860 · +63936 557 9373 ·",
  contactno: "09365579373",
  email: "warrenmrflr@gmail.com",
  skills: ["SQL", "C#", "HTML", "Javascript", "CSS", "ASP.NET", "React", "REST API"],
  description:
    '"I am a Software Developer with holistic knowledge of software development and proven knowledge in creating and designing software in a test-driven environment and agile software methodology."',
  picture_file_loc: "./images/warren_art.jpeg",
};

const experience = [
  {
    job_position: "Software Developer",
    job_period: "September 2024 - Present",
    job_company: "Eurolink Network International Corporation",
    job_desc_1:  "Maintain and enhance 'EClaims Philhealth Integration System', An application that handles a claims information and system provider for health facilities. This is written with C#/ASP.NET MVC and Microsoft SQL database.",
    job_desc_2: "Implemented Azure DevOps (Boards, Pipelines, Repos) to streamline Agile workflows and accelerate SDLC from code to production.",
    job_desc_3: "Implemented REST API integration to enable seamless communication between frontend and backend services.",
    job_desc_4: "Handled end-to-end deployment from testing to production environments, ensuring stability, functionality, and readiness for live use",
  },
  {
    job_position: "Software Developer",
    job_period: "March 2021 - August 2024",
    job_company: "Hartmann Crew Philippines, Hartmann Global IT",
    job_desc_1:
      "Transform legacy application 'Crew Management System' into a cloud application called 'Crew Management System Cloud', using 'Thinkwise' low code software.",
    job_desc_2:
      "Develop and maintain 'HIS mobile app' or 'Hartmann Information System mobile app', using 'Thinkwise' low code software.",
    job_desc_3:
      "Develop and maintain 'Master Database' software that is a kin to a 'Shareholder management tool' , using 'Thinkwise' low code software.",
    job_desc_4:
      "Provide training on low code platform utilization and proficiency in SQL and T-SQL, while concurrently managing and guiding team members.",
  },
  {
    job_position: "Software Developer",
    job_period: "August 2020 - March 2021",
    job_company: "Hartmann Crew Philippines",
    job_desc_1:
      "Maintain and enhance 'HCP Mobile Application System', An application that handles a crew information and geofencing technology. This is written with Android Studio/Java and Firebase database.",
    job_desc_2:
      "Engage with office users to gather feedback and address their requests.",
    job_desc_3:
      "Create documentations for current decade old applications candidate for future transformation, for future developers",
    job_desc_4:
      "Familiarize C# applications and provide training concepts for the company for future development.",
  },
];

const education = [
  {
    course: "Bachelor of Science Information Technology",
    school: "Polytechnic University of the Philippines",
    year: "2015 - 2020",
  },
];

const contact = [
  {
    contactno: "09365579373",
    email: "warrenmrflr@gmail.com",
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
        <hr class="m-0" />
        {/*Contact*/}
        <section class="resume-section" id="contact">
          <Contact contact={contact} />
        </section>
      </div>
    </div>
  );
}

export default App;
