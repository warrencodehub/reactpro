import { useState } from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const person = {
  first_name: "Warren",
  last_name: "Miraflor",
  jobclass: "Software Developer",
  bday: "06/21/1995",
  age: "28",
  address: "Rodriguez, Rizal PH 1860 · +63936 557 9373 ·",
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
  const [activeSection, setActiveSection] = useState("");
  
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef, { threshold: 0.3 });
  const experienceInView = useInView(experienceRef, { threshold: 0.3 });
  const educationInView = useInView(educationRef, { threshold: 0.3 });
  const skillsInView = useInView(skillsRef, { threshold: 0.3 });
  const contactInView = useInView(contactRef, { threshold: 0.3 });

  useEffect(() => {
    if (aboutInView) setActiveSection("about");
    if (experienceInView) setActiveSection("experience");
    if (educationInView) setActiveSection("education");
    if (skillsInView) setActiveSection("skills");
    if (contactInView) setActiveSection("contact");
  }, [aboutInView, experienceInView, educationInView, skillsInView, contactInView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.0,
        ease: "easeOut"
      }
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        {/* Page Container */}
      <div class="container-fluid p-0">
        {/* The Grid */}
        <motion.section 
          ref={aboutRef}
          className="resume-section" 
          id="about"
          variants={sectionVariants}
          initial="hidden"
          animate={aboutInView || activeSection === "about" ? "visible" : "hidden"}
        >
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
        </motion.section>
        <hr className="m-0" />
        {/* Experience */}
        <motion.section 
          ref={experienceRef}
          className="resume-section" 
          id="experience"
          variants={sectionVariants}
          initial="hidden"
          animate={experienceInView || activeSection === "experience" ? "visible" : "hidden"}
        >
          <Experience experience={experience} />
        </motion.section>
        <hr className="m-0" />
        {/*Education*/}
        <motion.section 
          ref={educationRef}
          className="resume-section" 
          id="education"
          variants={sectionVariants}
          initial="hidden"
          animate={educationInView || activeSection === "education" ? "visible" : "hidden"}
        >
          <Education education={education} />
        </motion.section>
        <hr className="m-0" />
        {/* Skills*/}
        <motion.section 
          ref={skillsRef}
          className="resume-section" 
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          animate={skillsInView || activeSection === "skills" ? "visible" : "hidden"}
        >
          <Skills skills={person.skills} />
        </motion.section>
        <hr className="m-0" />
        {/*Contact*/}
        <motion.section 
          ref={contactRef}
          className="resume-section" 
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          animate={contactInView || activeSection === "contact" ? "visible" : "hidden"}
        >
          <Contact contact={contact} />
        </motion.section>
      </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
