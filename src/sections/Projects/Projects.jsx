import { useState } from 'react'
import Projectmodal from '../../components/Projectmodal/Projectmodal'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'PostgreSQL Replication',
    category: 'Database',
    description:
      'Built a PostgreSQL lab to replicate data from a primary server to a standby server for backup and from a primary server to a separate OLAP server for data analysis.',
    thumbnail: '/images/projects/postgres/postgresLogo.png',
    images: [
      {
      src: '/images/projects/postgres/Topology.png',
      caption: 'Topology',
      },
      {
      src: '/images/projects/postgres/master-standby.png',
      caption: 'Physical Replication',
      },
      {
      src: '/images/projects/postgres/Logical-replication.png',
      caption: 'Logical Replication',
      },
      {
      src: '/images/projects/postgres/pg_activity.png',
      caption: 'pg_activity',
      },
    ],
    technologies: ['PostgreSQL', 'SQL', 'Oracle VirtualBox', 'Linux', 'Physical & Logical Replication'],
  },
  {
    id: 2,
    title: 'Server Resource Monitoring',
    category: 'System Monitoring',
    description:
      'Built a Grafana dashboard to monitor CPU, memory, network usage, disk free space, and server availability across multiple servers.',
    thumbnail: '/images/projects/grafana/Grafana.png',
    images: [
      {
      src: '/images/projects/grafana/GrafanaResource.png',
      caption: 'Server-19',
      },
      {
      src: '/images/projects/grafana/server20.png',
      caption: 'Server-20',
      },
      {
      src: '/images/projects/grafana/server21.png',
      caption: 'Server-21',
      },
    ],
    technologies: ['Grafana', 'Prometheus', 'Linux', 'Node Exporter'],
  },
  {
    id: 3,
    title: 'Tracer Study Dashboard',
    category: 'Data Analytics',
    description:
      'Developed Tableau dashboards to analyze alumni questionnaire responses, employment status, job search duration, and the relevance of education to employment across faculties and study programs.',
    thumbnail: '/images/projects/tableau/Tableau-Logo.png',
    images: [
      {
      src: '/images/projects/tableau/dashboardTableau.png',
      caption: 'Dashboard Tracer Study',
      },
      {
      src: '/images/projects/tableau/summaryTableau.png',
      caption: 'Summary Dashboard',
      },
    ],
    technologies: ['Tableau', 'Data Visualization', 'Data Processing', 'Microsoft Excel'],
  },
]

function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  function openProject(project) {
    setActiveProject(project)
    setActiveImage(0)
  }

  function closeProject() {
    setActiveProject(null)
    setActiveImage(0)
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          PROJECTS<span>.</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="project-card"
              onClick={() => openProject(project)}
              aria-label={`View ${project.title} details`}
            >
              <div className="project-card-image">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-card-placeholder">
                    <span>{project.category}</span>
                  </div>
                )}

              </div>

              <div className="project-card-content">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <span className="project-view-link">
                  View project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Projectmodal
        project={activeProject}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        onClose={closeProject}
      />
    </section>
  )
}

export default Projects