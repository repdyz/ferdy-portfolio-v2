import { useEffect, useRef, useState } from 'react'
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
    technologies: [
      'PostgreSQL',
      'SQL',
      'Oracle VirtualBox',
      'Linux',
      'Physical & Logical Replication',
    ],
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
    technologies: [
      'Tableau',
      'Data Visualization',
      'Data Processing',
      'Microsoft Excel',
    ],
  },
]

// Repeat existing data to create a seamless carousel loop.
const carouselProjects = [...projects, ...projects, ...projects]

function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [activeIndex, setActiveIndex] = useState(projects.length)
  const [cardStep, setCardStep] = useState(0)
  const [isJumping, setIsJumping] = useState(false)

  const trackRef = useRef(null)
  const touchStartX = useRef(null)
  const suppressClick = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    function measureCardStep() {
      const firstCard = track.firstElementChild
      if (!firstCard) return

      const styles = window.getComputedStyle(track)
      const gap = Number.parseFloat(styles.columnGap) || 0
      const nextStep = firstCard.getBoundingClientRect().width + gap

      setCardStep((currentStep) =>
        Math.abs(currentStep - nextStep) > 0.5
          ? nextStep
          : currentStep,
      )
    }

    measureCardStep()

    const observer = new ResizeObserver(measureCardStep)
    observer.observe(track)
    window.addEventListener('resize', measureCardStep)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measureCardStep)
    }
  }, [])

  useEffect(() => {
    if (!isJumping) return

    const frame = window.requestAnimationFrame(() => {
      setIsJumping(false)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [isJumping])

  function nextProject() {
    if (projects.length < 2 || isJumping) return
    setActiveIndex((index) => index + 1)
  }

  function previousProject() {
    if (projects.length < 2 || isJumping) return
    setActiveIndex((index) => index - 1)
  }

  function handleTransitionEnd(event) {
    if (event.target !== event.currentTarget) return

    if (activeIndex >= projects.length * 2) {
      setIsJumping(true)
      setActiveIndex(projects.length)
    } else if (activeIndex < projects.length) {
      setIsJumping(true)
      setActiveIndex(projects.length * 2 - 1)
    }
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
    suppressClick.current = false
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return

    const endX = event.changedTouches[0].clientX
    const distance = touchStartX.current - endX

    touchStartX.current = null

    if (Math.abs(distance) < 50) return

    suppressClick.current = true

    if (distance > 0) {
      nextProject()
    } else {
      previousProject()
    }
  }

  function handleTouchCancel() {
    touchStartX.current = null
  }

  function handleCardClick(project) {
    if (suppressClick.current) {
      suppressClick.current = false
      return
    }

    setActiveProject(project)
    setActiveImage(0)
  }

  function closeProject() {
    setActiveProject(null)
    setActiveImage(0)
  }

  const displayedIndex =
    ((activeIndex - projects.length) % projects.length +
      projects.length) %
      projects.length +
    1

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          PROJECTS<span>.</span>
        </h2>

        <div
          className="projects-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <div
            ref={trackRef}
            className={`projects-track${isJumping ? ' is-jumping' : ''}`}
            style={{
              transform: `translateX(-${activeIndex * cardStep}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {carouselProjects.map((project, index) => (
              <button
                key={`${index}-${project.id}`}
                type="button"
                className="project-card"
                onClick={() => handleCardClick(project)}
                aria-label={`View ${project.title} details`}
              >
                <div className="project-card-image">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      loading="lazy"
                      draggable="false"
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
                    View project
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="projects-controls">
          <span
            className="projects-counter"
            aria-live="polite"
            aria-atomic="true"
          >
            {String(displayedIndex).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </span>

          <button
            type="button"
            className="projects-arrow"
            onClick={previousProject}
            aria-label="Previous project"
            disabled={projects.length < 2 || isJumping}
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            className="projects-arrow"
            onClick={nextProject}
            aria-label="Next project"
            disabled={projects.length < 2 || isJumping}
          >
            <span aria-hidden="true">→</span>
          </button>
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