import { useEffect } from 'react'
import './Projectmodal.css'

function Projectmodal({
  project,
  activeImage,
  setActiveImage,
  onClose,
}) {
  const images = project?.images ?? []

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight' && images.length > 1) {
        setActiveImage((current) => (current + 1) % images.length)
      }

      if (event.key === 'ArrowLeft' && images.length > 1) {
        setActiveImage(
          (current) => (current - 1 + images.length) % images.length
        )
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [project, images.length, onClose, setActiveImage])

  if (!project) return null

  const previousImage = (event) => {
    event.stopPropagation()
    setActiveImage((current) => (current - 1 + images.length) % images.length)
  }

  const nextImage = (event) => {
    event.stopPropagation()
    setActiveImage((current) => (current + 1) % images.length)
  }

  const currentImage = images[activeImage]
  const imageSrc =
    typeof currentImage === 'string' ? currentImage : currentImage?.src
  const imageCaption =
    typeof currentImage === 'string' ? '' : currentImage?.caption

  return (
    <div className="projectmodal-overlay" onClick={onClose}>
      <div
        className="projectmodal-content"
        role="dialog"
        aria-modal="true"
        aria-label={project.title || 'Project details'}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="projectmodal-header">
          <div>
            <p className="projectmodal-label">PROJECT DETAILS</p>
            <h2>{project.title}</h2>
          </div>

          <button
            className="projectmodal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            &times;
          </button>
        </div>

        {project.description && (
          <p className="projectmodal-description">
            {project.description}
          </p>
        )}

        {images.length > 0 ? (
          <div className="projectmodal-gallery">
            <div className="projectmodal-main-image">
              <img
                src={imageSrc}
                alt={imageCaption || `${project.title} - Image ${activeImage + 1}`}
              />

              {images.length > 1 && (
                <>
                  <button
                    className="projectmodal-arrow projectmodal-arrow-left"
                    onClick={previousImage}
                    aria-label="Previous image"
                  >
                    &#10094;
                  </button>

                  <button
                    className="projectmodal-arrow projectmodal-arrow-right"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    &#10095;
                  </button>

                  <span className="projectmodal-counter">
                    {activeImage + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {imageCaption && (
              <p className="projectmodal-caption">{imageCaption}</p>
            )}

            {images.length > 1 && (
              <div className="projectmodal-thumbnails">
                {images.map((image, index) => {
                  const thumbnailSrc =
                    typeof image === 'string' ? image : image.src

                  return (
                    <button
                      key={`${thumbnailSrc}-${index}`}
                      className={`projectmodal-thumbnail ${
                        activeImage === index ? 'active' : ''
                      }`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1}`}
                      aria-pressed={activeImage === index}
                    >
                      <img
                        src={thumbnailSrc}
                        alt={`${project.title} thumbnail ${index + 1}`}
                      />
                    </button>
                  )
                })}
              </div>
            )}

            {images.length > 1 && (
              <p className="projectmodal-hint">
                Use the arrows or click a thumbnail to browse images.
              </p>
            )}
          </div>
        ) : (
          <div className="projectmodal-empty">
            No project images available.
          </div>
        )}
      </div>
    </div>
  )
}

export default Projectmodal