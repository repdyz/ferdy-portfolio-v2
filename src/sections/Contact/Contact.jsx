
import './Contact.css'

const careerInterests = [
  { icon: 'database', title: 'Jr Database Administrator' },
  { icon: 'server', title: 'Jr System Administrator' },
  { icon: 'monitor', title: 'IT Operations and Support' },
]

const contacts = [
  {
    icon: 'whatsapp',
    label: 'WHATSAPP',
    value: 'Text Me',
    href: 'https://wa.me/6281284284460',
  },
  {
    icon: 'email',
    label: 'EMAIL',
    value: 'fferdyansyahh@gmail.com',
    href: 'mailto:fferdyansyahh@gmail.com',
  },
  {
    icon: 'github',
    label: 'GITHUB',
    value: 'GitHub Profile',
    href: 'https://github.com/repdyz',
  },
  {
    icon: 'linkedin',
    label: 'LINKEDIN',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/ferdyansyah/',
  },
  {
    icon: 'instagram',
    label: 'INSTAGRAM',
    value: 'Instagram Profile',
    href: 'https://www.instagram.com/fferdyansyahh/',
  },
]

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      )

    case 'server':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="7" rx="2" />
          <rect x="3" y="14" width="18" height="7" rx="2" />
          <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" />
        </svg>
      )

    case 'monitor':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="13" rx="2" />
          <path d="M12 16v5M8 21h8" />
        </svg>
      )

    case 'whatsapp':
      return (
        <svg {...common}>
          <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.8a8.2 8.2 0 1 1 16-3.5Z" />
          <path d="M8.5 7.8c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.6 1 1.4 1.7 2.4 2.2.3.2.5.2.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.5.5-1.2.8-2 .7-1.1-.1-2.5-.7-4-2-1.2-1-2.1-2.3-2.4-3.4-.3-1 .1-1.9.4-2.4Z" />
        </svg>
      )

    case 'email':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )

    case 'github':
      return (
        <svg
          {...common}
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3.3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      )

    case 'linkedin':
      return (
        <svg
          {...common}
          fill="currentColor"
          stroke="none"
        >
          <path d="M5.2 8.4a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM3.4 10h3.6v10.5H3.4ZM9.1 10h3.5v1.4h.1a3.8 3.8 0 0 1 3.4-1.8c3.7 0 4.4 2.4 4.4 5.4v5.5h-3.6v-4.9c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5H9.1Z" />
        </svg>
      )

    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </svg>
      )

    case 'location':
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )

    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" />
        </svg>
      )

    case 'file':
      return (
        <svg {...common}>
          <path d="M6 2.5h8l5 5V21H6z" />
          <path d="M14 2.5v5h5M9 13h6M9 17h6" />
        </svg>
      )

    default:
      return null
  }
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <header className="contact-heading">
            <h2 className="contact-title">
                CONTACT<span>.</span>
            </h2>
        </header>

        <div className="career-interests">
          <div className="contact-divider career-divider" />
          <h3>Career Interests</h3>

          <div className="career-list">
            {careerInterests.map((interest) => (
              <div className="career-item" key={interest.title}>
                <span className="career-icon">
                  <Icon name={interest.icon} size={25} />
                </span>
                <span className="career-name">
                  {interest.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-divider" />

        <div className="connect-section">
          <h3>Let's connect.</h3>

          <div className="connect-list">
            {contacts.map((contact) => (
              <a
                className="connect-item"
                href={contact.href}
                key={contact.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="connect-icon">
                  <Icon name={contact.icon} size={23} />
                </span>

                <span className="connect-copy">
                  <span className="connect-label">
                    {contact.label}
                  </span>
                  <span className="connect-value">
                    {contact.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="connect-item location-item">
              <span className="connect-icon">
                <Icon name="location" size={23} />
              </span>

              <span className="connect-copy">
                <span className="connect-label">LOCATION</span>
                <span className="connect-value">
                  Jakarta, Indonesia
                </span>
              </span>
            </div>

            <a
              href="/CV%20-%20FERDYANSYAH.pdf"
              download="CV - FERDYANSYAH.pdf"
              className="connect-item cv-download-item"
            >
              <span className="connect-icon">
                <Icon name="file" size={23} />
              </span>

              <span className="connect-copy">
                <span className="connect-label">DOWNLOAD CV</span>
                <span className="connect-value">
                  My resume
                </span>
              </span>

              <span className="cv-download-icon">
                <Icon name="download" size={22} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
