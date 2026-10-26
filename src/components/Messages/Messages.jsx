
import { useEffect, useState } from 'react'
import './Messages.css'

function Message() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <button
        className="message-trigger"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="about-message"
      >
        <svg
          className="message-trigger-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </svg>
        ABOUT ME
      </button>

      {isOpen && (
        <div className="message-overlay">
          <section
            className="message-panel"
            id="about-message"
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-title"
          >
            <header className="message-header">
              <span className="message-label">A LITTLE ABOUT ME</span>

              <button
                className="message-close"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close message"
                autoFocus
              >
                ×
              </button>
            </header>

            <h2 id="message-title">Hello World, I'm Ferdy.</h2>

            <p>
              I am interested in IT operations and infrastructure, particularly Linux, databases, and system monitoring. I am adaptable, a fast learner, honest, and capable of working independently or as part of a team. I am ready to contribute professionally and support reliable IT operations.
            </p>

            <footer className="message-footer">
              <span>ABOUT ME</span>
              <span>PRESS ESC TO CLOSE</span>
            </footer>
          </section>
        </div>
      )}
    </>
  )
}

export default Message