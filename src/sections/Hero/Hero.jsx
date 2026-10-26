import profile from '../../data/profile'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-visual">
          <div className="hero-ring hero-ring-outer" />
          <div className="hero-ring hero-ring-inner" />

          <span className="hero-spark hero-spark-two">✦</span>
          <span className="hero-dot hero-dot-one" />
          <span className="hero-dot hero-dot-two" />

          <div className="hero-profile">
            <img
              src={profile.profileImage}
              alt={`Foto profil ${profile.name}`}
            />
          </div>
        </div>

        <div className="hero-availability">
          <span className="hero-availability-dot" />
          <span>OPEN TO WORK</span>
        </div>

        <h1 className="hero-heading">{profile.name}</h1>
        <p className="hero-tagline">"Small steps still counT"</p>
      </div>
    </section>
  )
}

export default Hero
