import "./History.css";
import equnixLogo from "../../assets/equnixLogo2 (1).png";
import uswahLogo from "../../assets/logoUswahBaru (1).png";
import idsLogo from "../../assets/idsLogo1.png";
import universityLogo from "../../assets/uaiLogoBaru (1).png";

const workExperiences = [
  {
    role: "Application Support (Contract)",
    company: "IDSurvey",
    date: "Nov 2026 – Present",
    logo: idsLogo,
    description:
      "Handle support tickets, respond to user requests, and coordinate with relevant technical teams to ensure timely issue resolution and service continuity.",
  },
  {
    role: "Support Engineer (Contract)",
    company: "PT. Equnix Layanan Unggul",
    date: "Aug 2025 – Oct 2026",
    logo: equnixLogo,
    description:
      "Monitored server and PostgreSQL performance, handled Linux and database operations, performed initial troubleshooting, monitored replication and backup processes, and supported incident resolution in a 24/7 operational environment.",
  },
  {
    role: "Learning Management System Administrator (Internship)",
    company: "PT. Uswah Salam Al Azhar",
    date: "Oct 2023 - Jan 2024",
    logo: uswahLogo,
    description:
      "Designed and configured a Moodle-based e-learning platform, including data migration, plugin installation, and uploading mid-term examination questions.",
  },
];

const education = {
  degree: "Bachelor's Degree in Informatics",
  university: "University of Al-Azhar Indonesia ",
  date: "Aug 2020 – Mar 2025",
  description:
    "Studied informatics with a focus on information technology fundamentals, analytical thinking, and problem-solving. Developed technical knowledge through academic learning and practical projects while actively participating in student organizations.",
};

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18M10 12v2h4v-2" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m2 10 10-5 10 5-10 5-10-5Z" />
      <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function History() {
  return (
    <section className="history-section" id="history">
      <div className="history-container">
        <h2 className="history-title">HISTORY<span>.</span></h2>
        <div className="history-timeline">
          <div className="history-side history-work-side">
            <div className="history-icon">
              <BriefcaseIcon />
            </div>
            <h3>WORK EXPERIENCE</h3>
          </div>

          <div className="history-items">
            {workExperiences.map((job, index) => (
              <article
                className="history-card"
                key={`${job.role}-${index}`}
              >
                <span className="history-timeline-dot" />

                <div className="history-card-info">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="history-company-logo"
                    />
                  )}

                  <div className="history-job-details">
                    <h4>{job.role}</h4>

                    <div className="history-meta">
                      <span className="history-company">
                        {job.company}
                      </span>
                      <span className="history-date">{job.date}</span>
                    </div>
                  </div>
                </div>

                <p className="history-description">{job.description}</p>
              </article>
            ))}
          </div>

          <div className="history-education">
            <div className="history-side history-education-side">
              <div className="history-icon">
                <GraduationIcon />
              </div>
              <h3>EDUCATION</h3>
            </div>

            <article className="history-card history-education-card">
         <div className="history-card-info">
              <img
                  src={universityLogo}
                  alt={`${education.university} logo`}
                  className="history-company-logo"
              />

          <div className="history-job-details">
            <h4>{education.degree}</h4>

          <div className="history-meta">
            <span className="history-company">
              {education.university}
              </span>
             <span className="history-date">{education.date}</span>
            </div>
          </div>
        </div>

      <p className="history-description">{education.description}</p>
    </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;