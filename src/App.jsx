import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  ShieldCheck,
  Workflow,
  FileText,
  GraduationCap,
  MapPin,
  Award,
  CheckCircle2,
  X,
  Image as ImageIcon,
  ZoomIn,
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Rosari Simanjuntak",
  email: "rosarisimanjuntak04@gmail.com",
  phone: "+62 822-1157-7637",
  location: "Medan, North Sumatra, Indonesia",
  github: "https://github.com/rosarisimanjuntak16",
  linkedin: "https://www.linkedin.com/in/rosari-simanjuntak",
};

const interests = [
  {
    number: "01",
    title: "Web Development",
    icon: Code2,
    description:
      "Building responsive, functional, and user-friendly web applications using frontend and backend technologies.",
    skills: ["React.js", "Vue.js", "Laravel", "PHP", "MySQL"],
  },
  {
    number: "02",
    title: "Business & Systems Analysis",
    icon: Workflow,
    description:
      "Understanding business needs, analyzing workflows, gathering requirements, and translating them into structured system designs.",
    skills: ["BPMN", "SRS", "Use Case", "ERD", "DFD"],
  },
  {
    number: "03",
    title: "Software Quality Assurance",
    icon: ShieldCheck,
    description:
      "Testing applications, designing test cases, validating APIs, and identifying issues to improve software reliability.",
    skills: ["Postman", "Katalon Studio", "Manual Testing"],
  },
];

const skillGroups = [
  {
    title: "Development",
    icon: Code2,
    items: [
      "React.js",
      "Vue.js",
      "Laravel",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Business & Systems Analysis",
    icon: Workflow,
    items: [
      "Requirement Gathering",
      "Business Process Analysis",
      "BPMN",
      "SRS",
      "Use Case Diagram",
      "DFD",
      "ERD",
    ],
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    items: [
      "Manual Testing",
      "Automated Testing",
      "API Testing",
      "Test Case Design",
      "Regression Testing",
      "Postman",
      "Katalon Studio",
    ],
  },
  {
    title: "Data & Tools",
    icon: Database,
    items: [
      "Python",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Git",
      "GitHub",
    ],
  },
];

// PROJECT DATA AND EVIDENCE
// Place the image files in public/Projects/ using these paths.
const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Loka POM Toba",
    description:
      "A public service ticketing system designed to support information requests, complaints, business assistance, online consultation sessions, and satisfaction surveys.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    icon: Workflow,
    color: "mint",
    type: "Development",
    evidence: [
      {
        title: "Personal Data Form",
        type: "Application Screenshot",
        src: "/Projects/loka-pom/data-pribadi.png",
        alt: "Loka POM Toba personal data form",
        description:
          "A form for collecting user information when submitting a service request.",
      },
      {
        title: "Request Management Dashboard",
        type: "Application Screenshot",
        src: "/Projects/loka-pom/data-request.png",
        alt: "Loka POM Toba request management dashboard",
        description:
          "A request management page with search, filters, request summaries, and a data table.",
      },
      {
        title: "Service Workflow",
        type: "deploy client",
        src: "/Projects/loka-pom/deploy client.jpeg",
        alt: "Loka POM Toba client deployment configuration",
        description:
          "Documentation of the client deployment setup for the Loka POM Toba application.",
      },
    ],
  },
  {
    category: "WEB APPLICATION",
    title: "ArsipSisfor",
    description:
      "A web-based document management system for Information Systems, supporting folder creation, document organization, file uploads, searching, and API integration.",
    technologies: ["Laravel", "PHP", "MySQL", "React.js"],
    icon: FileText,
    color: "purple",
    type: "Development",
    evidence: [
      {
        title: "Create Folder",
        type: "Application Screenshot",
        src: "/Projects/arsipsisfor/create folder.jpeg",
        alt: "ArsipSisfor create folder interface",
        description:
          "A screenshot demonstrating the folder creation feature for organizing documents in ArsipSisfor.",
      },
      {
        title: "ArsipSisfor Features",
        type: "Application Screenshot",
        src: "/Projects/arsipsisfor/feature.jpeg",
        alt: "ArsipSisfor application features",
        description:
          "Screenshots showcasing the main features of ArsipSisfor for managing and organizing documents.",
      },
      {
        title: "API Testing",
        type: "API Test",
        src: "/Projects/arsipsisfor/API test.png",
        alt: "ArsipSisfor API testing in Postman",
        description:
          "API testing evidence showing requests and responses used to verify the application's API endpoints.",
      },
    ],
  },
  {
    number: "03",
    category: "SOFTWARE QUALITY ASSURANCE",
    title: "Software Testing Project",
    description:
      "Designed and executed positive and negative test scenarios for application features. Practiced automated, data-driven, and regression testing.",
    technologies: ["Katalon Studio", "Test Cases", "Excel"],
    icon: ShieldCheck,
    color: "blue",
    type: "Quality Assurance",
    evidence: [
      {
      title: "Automated Test Execution",
      type: "Execution Results",
      src: "/Projects/software-testing/test-execution.png",
      alt: "Katalon Studio automated test execution results",
      description:
        "Evidence of automated test execution in Katalon Studio, showing the results of the tested scenarios.",
    },
    {
      title: "Positive & Negative Test Cases",
      type: "Test Scenarios",
      src: "/Projects/software-testing/test-cases.png",
      alt: "Positive and negative test scenarios for JOOX",
      description:
        "Test scenarios covering valid login, profile editing, and playlist creation, including negative test conditions.",
    },
    {
      title: "Data-Driven Testing",
      type: "Test Data & Execution",
      src: "/Projects/software-testing/data-driven-testing.png",
      alt: "Excel test data and Katalon data-driven test execution",
      description:
        "Demonstration of data-driven testing using Excel test data to execute automated login tests with multiple data entries.",
      },
    ],
  },
  {
    number: "04",
    category: "BUSINESS & SYSTEMS ANALYSIS",
    title: "System Requirements & Process Analysis",
    description:
      "Analyzed business processes and system requirements, and used structured modeling and documentation to support information system design.",
    technologies: ["BPMN", "SRS", "Use Case", "ERD", "DFD"],
    icon: Workflow,
    color: "orange",
    type: "Analysis",
    evidence: [
      {
        title: "Business Process Diagram",
        type: "BPMN",
        src: "/Projects/system-analysis/bpmn.png",
        alt: "Business process diagram",
        description: "A BPMN diagram illustrating a business workflow.",
      },
      {
        title: "Use Case Diagram",
        type: "Use Case",
        src: "/Projects/system-analysis/use-case.png",
        alt: "System use case diagram",
        description:
          "A use case diagram showing actors and system functionality.",
      },
      {
        title: "Entity Relationship Diagram",
        type: "ERD",
        src: "/Projects/system-analysis/erd.png",
        alt: "System entity relationship diagram",
        description: "An ERD describing entities and their relationships.",
      },
      {
        title: "Client",
        type: "client",
        src: "/Projects/system-analysis/client.jpeg",
        alt: "System data flow diagram",
      },
    ],
  },
];

const experience = [
  {
    date: "JUN 2025 — AUG 2025",
    role: "Software Developer Intern",
    company: "Gema Cendekia Gemilang",
    location: "Jakarta, Indonesia",
    description:
      "Developed and maintained frontend modules for the ClodiOs ERP system using Vue.js, implemented responsive interfaces, integrated frontend components with backend APIs, and performed API testing using Postman.",
    tags: ["Vue.js", "Tailwind CSS", "PostgreSQL", "Postman"],
  },
];

const certifications = [
  {
    title: "Associate Data Scientist",
    issuer: "Lembaga Sertifikasi Profesi (LSP) — BNSP Certified",
    date: "October 2025",
    images: [
      {
        src: "/Projects/certifications/associate-data-scientist1.jpeg",
        alt: "Associate Data Scientist certificate — first photo",
      },
      {
        src: "/Projects/certifications/associate-data-scientist2.jpeg",
        alt: "Associate Data Scientist certificate — second photo",
      },
    ],
  },
];

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

// Reusable evidence gallery
function EvidenceGallery({ evidence, onOpen }) {
  if (!evidence?.length) return null;

  return (
    <div className="evidence-section">
      <div className="evidence-heading-row">
        <h4 className="evidence-heading">Project Evidence</h4>
        <span className="evidence-count">
          {evidence.length} {evidence.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="evidence-grid">
        {evidence.map((item) => (
          <button
            className="evidence-item"
            type="button"
            key={item.src}
            onClick={() => onOpen(item)}
            aria-label={`View ${item.title}`}
          >
            <div className="evidence-image-wrap">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add(
                    "evidence-image-missing",
                  );
                }}
              />
              <ImageIcon className="evidence-fallback-icon" size={28} />
              <span className="evidence-zoom">
                <ZoomIn size={17} />
              </span>
            </div>

            <span className="evidence-type">{item.type}</span>
            <span className="evidence-title">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Full-size image preview
function EvidenceModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const imageSrc = item.src ?? item.image;

  return (
    <div className="evidence-modal" onClick={onClose} role="presentation">
      <div
        className="evidence-modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="evidence-close"
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={21} />
        </button>

        <div className="evidence-modal-image">
          <img src={imageSrc} alt={item.alt} />
        </div>

        <div className="evidence-modal-caption">
          <span className="evidence-type">{item.type}</span>
          <h3>{item.title}</h3>
          {item.description && <p>{item.description}</p>}
        </div>
      </div>
    </div>
  );
}


function CertificateGallery({ certificates, onOpen }) {
  return (
    <div className="certificate-gallery">
      {certificates.map((certificate, index) => {
        const certificateImages = certificate.images ?? [
          {
            src: certificate.src ?? certificate.image,
            alt: certificate.alt || certificate.title,
          },
        ];

        return (
          <div
            className="certificate-card"
            key={`${certificate.title}-${index}`}
          >
            <div className="certificate-images">
              {certificateImages.map((image, imageIndex) => (
                <div
                  className="certificate-image-wrap"
                  key={`${image.src}-${imageIndex}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt || certificate.title}
                    className="certificate-image"
                    loading="lazy"
                    onClick={() =>
                      onOpen({
                        title: `${certificate.title} — Foto ${imageIndex + 1}`,
                        src: image.src,
                        alt: image.alt || certificate.title,
                      })
                    }
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.parentElement.classList.add(
                        "certificate-image-missing"
                      );
                    }}
                  />

                  <div className="certificate-fallback-icon">
                    <span>Certificate preview unavailable</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="certificate-info">
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span>{certificate.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Rosari home">
          <span className="brand-mark">R.</span>
          <span>
            rosari<span className="brand-muted">.dev</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Contact me <ArrowDownRight size={16} />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              INFORMATION SYSTEMS
            </div>

            <p className="eyebrow">HELLO, I'M ROSARI SIMANJUNTAK</p>

            <h1>
              Building the web.
              <br />
              Analyzing systems.
              <br />
              <span className="text-accent">Ensuring quality.</span>
            </h1>

            <p className="hero-description">
              An Information Systems graduate with a strong interest in Web
              Development, Business & Systems Analysis, and Software Quality
              Assurance. I enjoy building useful web applications, understanding
              business requirements, and ensuring software quality through
              testing.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                Explore my work <ArrowRight size={17} />
              </a>
              <a href="#contact" className="button-secondary">
                Get in touch
              </a>
            </div>

            <div className="hero-socials">
              <span>CONNECT WITH ME</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-top">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="profile-tag">PROFILE.EXE</span>
              </div>

              <div className="profile-avatar">
                <span>R.</span>
              </div>
              <h2>{profile.name}</h2>
              <p className="profile-role">
                Web Development · Systems Analysis · QA
              </p>

              <div className="profile-divider" />

              <div className="profile-detail">
                <span>LOCATION</span>
                <strong>Medan, Indonesia</strong>
              </div>
              <div className="profile-detail">
                <span>EDUCATION</span>
                <strong>Information Systems</strong>
              </div>
              <div className="profile-detail">
                <span>INTERESTS</span>
                <strong>Development & Analysis</strong>
              </div>

              <div className="profile-code">
                <Code2 size={17} />
                <span>build(); analyze(); test();</span>
              </div>
            </div>

            <div className="floating-card floating-code">
              <ShieldCheck size={18} />
              <div>
                <strong>Quality first</strong>
                <span>Test · Analyze · Improve</span>
              </div>
            </div>

            <div className="floating-card floating-status">
              <span className="status-dot" />
              <div>
                <strong>Always learning</strong>
                <span>Growing through experience</span>
              </div>
            </div>

            <div className="visual-caption">
              ANALYTICAL MIND. DETAIL-ORIENTED.
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <SectionLabel>01 / ABOUT ME</SectionLabel>
            <h2>
              Understanding problems.
              <br />
              <span className="text-muted">Building better solutions.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I am interested in building useful web applications, analyzing
              business processes, and ensuring that software works as intended.
            </p>
            <p className="body-copy">
              My interests span Web Development, Business & Systems Analysis,
              and Software Quality Assurance. I enjoy developing responsive web
              interfaces, translating business needs into system requirements
              and workflows, and testing applications to identify issues and
              improve reliability. Through academic projects and internship
              experience, I continue to develop my technical, analytical, and
              problem-solving skills.
            </p>
            <div className="hero-image-wrap">
                <img
                  src="/Rosari Simanjuntak.png"
                  alt="Rosari Simanjuntak"
                  className="hero-profile-image"
                />
              </div>
            <div className="stats-grid">
              <div className="stat-item">
                <strong>01</strong>
                <span>Web Development</span>
              </div>
              <div className="stat-item">
                <strong>02</strong>
                <span>Business & Systems Analysis</span>
              </div>
              <div className="stat-item">
                <strong>03</strong>
                <span>Software Quality Assurance</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="interests section-wrap section-block"
          id="interests"
        >
          <div className="section-heading">
            <SectionLabel>02 / AREAS OF INTEREST</SectionLabel>
            <h2>
              Three interests.
              <br />
              <span className="text-muted">One technology-driven mindset.</span>
            </h2>
          </div>

          <div className="interest-grid">
            {interests.map((interest) => {
              const InterestIcon = interest.icon;
              return (
                <article className="interest-card" key={interest.number}>
                  <InterestIcon size={25} />
                  <span className="interest-number">{interest.number}</span>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                  <div className="tech-list">
                    {interest.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading">
            <SectionLabel>03 / SKILLS & TOOLKIT</SectionLabel>
            <h2>
              A practical toolkit
              <br />
              <span className="text-muted">for real-world problems.</span>
            </h2>
          </div>

          <div className="skills-content">
            <p className="body-copy">
              Technical and analytical skills developed through internship
              experience, academic projects, and professional learning.
            </p>

            <div className="skill-categories">
              {skillGroups.map((group) => {
                const SkillIcon = group.icon;
                return (
                  <div className="skill-category" key={group.title}>
                    <div className="skill-category-title">
                      <SkillIcon size={18} />
                      <h3>{group.title}</h3>
                    </div>
                    <div className="skill-list">
                      {group.items.map((item) => (
                        <span className="skill-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="learning-note">
              <CheckCircle2 size={18} />
              <p>
                <strong>Additional capabilities</strong>
                <span>
                  Git/GitHub, SDLC, Agile/Scrum, MVC, REST APIs, documentation,
                  teamwork, and problem-solving.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS WITH EVIDENCE GALLERIES */}
        <section className="projects section-wrap section-block" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <SectionLabel>04 / PROJECT EXPERIENCE</SectionLabel>
              <h2>
                From requirements
                <br />
                <span className="text-muted">to reliable solutions.</span>
              </h2>
            </div>
            <span className="project-count">SELECTED PROJECTS</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <article className="project-card" key={project.number}>
                  <div className={`project-art ${project.color}`}>
                    <span className="project-number">{project.number}</span>
                    <div className="project-art-icon">
                      <ProjectIcon size={42} strokeWidth={1.3} />
                    </div>
                    <span className="project-art-label">
                      {project.category}
                    </span>
                    <span className="art-decoration art-decoration-one" />
                    <span className="art-decoration art-decoration-two" />
                  </div>

                  <div className="project-info">
                    <span className="project-date">{project.type}</span>
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>

                  <EvidenceGallery
                    evidence={project.evidence}
                    onOpen={setSelectedEvidence}
                  />
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="experience section-wrap section-block"
          id="experience"
        >
          <div className="section-heading">
            <SectionLabel>05 / EXPERIENCE & EDUCATION</SectionLabel>
            <h2>
              Experience that
              <br />
              <span className="text-muted">shapes my approach.</span>
            </h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker" />
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-role">{item.company}</p>
                  <p className="timeline-location">
                    <MapPin size={13} /> {item.location}
                  </p>
                  <p>{item.description}</p>
                  <div className="tech-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="timeline-type">INTERNSHIP</span>
              </article>
            ))}

            <article className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-date">AUG 2022 — AUG 2026</div>
              <div className="timeline-content">
                <h3>Bachelor of Information Systems</h3>
                <p className="timeline-role">Institut Teknologi Del</p>
                <p className="timeline-location">
                  <GraduationCap size={14} /> Laguboti, Indonesia
                </p>
              </div>
              <span className="timeline-type">EDUCATION</span>
            </article>
          </div>
        </section>

        {/* CERTIFICATE GALLERY */}
        <section
          className="certification section-wrap section-block"
          id="certification"
        >
          <div className="section-heading">
            <SectionLabel>06 / CERTIFICATION</SectionLabel>
            <h2>
              Recognizing skills.
              <br />
              <span className="text-muted">Continuing to grow.</span>
            </h2>
          </div>

          <div className="certificate-summary">
            <div className="certificate-icon">
              <Award size={28} />
            </div>
            <div>
              <h3>Associate Data Scientist</h3>
              <p className="certificate-issuer">
                Lembaga Sertifikasi Profesi (LSP) · BNSP Certified
              </p>
              <p className="body-copy">
                Competency assessment covering data analysis, preprocessing,
                statistical analysis, data visualization, and predictive
                modeling.
              </p>
              <div className="tech-list">
                <span>Python</span>
                <span>Data Preprocessing</span>
                <span>Data Visualization</span>
                <span>Model Evaluation</span>
              </div>
            </div>
          </div>

          <CertificateGallery
            certificates={certifications}
            onOpen={setSelectedEvidence}
          />
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration" />
            <SectionLabel>07 / GET IN TOUCH</SectionLabel>
            <h2>
              Let's connect and
              <br />
              <span className="text-accent">create better solutions.</span>
            </h2>
            <p>
              Interested in Web Development, Business & Systems Analysis, or
              Software Quality Assurance opportunities? Feel free to reach out.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="button-primary contact-button"
            >
              <Mail size={17} /> {profile.email}
            </a>

            <div className="contact-details">
              <a
                href={`tel:${profile.phone.replaceAll(" ", "").replaceAll("-", "")}`}
              >
                <span>PHONE</span>
                <strong>{profile.phone}</strong>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>LINKEDIN</span>
                <strong>
                  Connect professionally <ExternalLink size={13} />
                </strong>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>GITHUB</span>
                <strong>
                  View repositories <ExternalLink size={13} />
                </strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">R.</span>
          <span>
            rosari<span className="brand-muted">.dev</span>
          </span>
        </a>
        <p>Rosari Simanjuntak · Medan, Indonesia</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>

      {/* Shared image preview modal */}
      <EvidenceModal
        item={selectedEvidence}
        onClose={() => setSelectedEvidence(null)}
      />
    </div>
  );
}

export default App;
