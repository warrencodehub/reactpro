import Pictures from "./Picture";

export default function Profile({
  first_name,
  last_name,
  picture_file_loc,
  jobclass,
  bday,
  age,
  address,
  email,
  description,
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
    <div class="resume-section-content">
      <h1 class="mb-0">
        {first_name}
        <span class="text-primary">{last_name}</span>
      </h1>
      <div class="subheading mb-5">
        {address}
        <a href="mailto:name@email.com">{email}</a>
      </div>
      <p class="lead mb-5">{description}</p>
      <div class="social-icons">
        <a
          class="social-icon"
          href="https://www.linkedin.com/in/warren-miraflor-6a3693288/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          class="social-icon"
          href="https://github.com/warrenmrflr"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
        <a class="social-icon" href="#!">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="social-icon" href="#!">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
}
