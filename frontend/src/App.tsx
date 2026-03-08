import React, { useState, useEffect } from 'react';
import './style.css';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handlePopupToggle = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    setActivePopup(activePopup === type ? null : type);
  };

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.contact-popup-container')) {
        setActivePopup(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-gradients">
        <div className="gradient-orb cyan"></div>
        <div className="gradient-orb blue"></div>
        <div className="gradient-orb purple"></div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="navbar-logos">
              <img src="/vvce-logo.png" alt="VVCE Logo" className="navbar-logo vvce" />
              <div className="navbar-symbiot-wrapper">
                <div className="nav-glow"></div>
                <img src="/symbiot-w-logo.png" alt="Symbiot Logo" className="navbar-logo symbiot" />
              </div>
            </div>
            <div className="brand-text">SYMBIOT<span>2026</span></div>
          </div>

          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#schedule" className="nav-link">Schedule</a>
            <a href="#prizes" className="nav-link">Prizes</a>
            <a href="#sponsors" className="nav-link">Sponsors</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://unstop.com/p/symbiot-2026-vidyavardhaka-college-of-engineering-mysore-1652707" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>Register</a>
          </div>

          <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#home" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#schedule" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a>
            <a href="#prizes" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Prizes</a>
            <a href="#sponsors" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sponsors</a>
            <a href="#faq" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="https://unstop.com/p/symbiot-2026-vidyavardhaka-college-of-engineering-mysore-1652707" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>Register</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-badge">A National Level 24-Hours Hardware Hackathon</div>
            <h1 className="hero-title">
              Design. Build. <br />
              <span className="text-gradient">Deploy.</span>
            </h1>
            <p className="hero-desc">
              Join 500+ innovators for a 24-hour deep tech build challenge at Vidyavardhaka College of Engineering, Mysuru.
              <br /><br />
              <span className="hero-dates">April 24th - 25th, 2026</span>
            </p>
            <div className="hero-actions">
              <a href="https://unstop.com/p/symbiot-2026-vidyavardhaka-college-of-engineering-mysore-1652707" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="logo-container">
              <div className="logo-glow-bg"></div>
              <img src="/symbiot-teal-logo.png" alt="Symbiot Logo" className="hero-main-logo" />

              <div className="orbit-elements">
                <div className="orbit-el orbit-1"><span>⚡</span> Embedded Systems</div>
                <div className="orbit-el orbit-2"><span>🌐</span> IoT</div>
                <div className="orbit-el orbit-3"><span>🤖</span> Robotics</div>
                <div className="orbit-el orbit-4"><span>🧠</span> Edge AI</div>
                <div className="orbit-el orbit-5"><span>🔬</span> VLSI</div>
              </div>
            </div>
          </div>
        </section>

        <div className="stats-ribbon">
          <div className="stat-item">
            <div className="stat-value">24H</div>
            <div className="stat-label">Build Sprint</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Innovators</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100+</div>
            <div className="stat-label">Deployments</div>
          </div>
        </div>

        <section id="about" className="section">
          <div className="section-header">
            <h2 className="section-title">About <span className="text-gradient">SYMBIOT</span></h2>
            <p className="section-subtitle">Pushing the boundaries of what is possible in a 24-hour hackathon through rigorous engineering and real-world applicability.</p>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <h3>Beyond Prototypes</h3>
              <p>SYMBIOT pushes teams to go beyond pitch decks and demo-only hacks. The focus is on deployable hardware and software stacks that can be tested, benchmarked, and scaled.</p>
              <p>From embedded systems and robotics to AI-driven platforms, every solution is evaluated for engineering rigor and real-world impact by industry experts.</p>
            </div>

            <div className="about-cards">
              <div className="glass-panel feature-card">
                <div className="feature-icon">⚙️</div>
                <h4>Real Hardware</h4>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Prototype and test on actual robots, sensors, and microcontrollers.</p>
              </div>
              <div className="glass-panel feature-card">
                <div className="feature-icon">🏢</div>
                <h4>Industry Problems</h4>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Tackle curated challenges designed with partner tech companies.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="section">
          <div className="section-header">
            <h2 className="section-title">Event <span className="text-gradient">Schedule</span></h2>
            <p className="section-subtitle">A tightly crafted 24-hour journey from onboarding to final showcase.</p>
          </div>

          <div className="timeline-container">

            <div className="day-label">
              <span className="day-dot"></span>
              <h3>Friday</h3>
            </div>

            <div className="timeline-row row-1">
              {/* 1 - Registration */}
              <div className="timeline-stop">
                <div className="stop-number">1</div>
                <div className="stop-icon">📝</div>
                <div className="stop-content">
                  <h4>Registration</h4>
                  <span>8:30 am</span>
                </div>
              </div>
              <div className="timeline-connector"></div>

              {/* 2 - Inauguration */}
              <div className="timeline-stop">
                <div className="stop-number">2</div>
                <div className="stop-icon">⚡</div>
                <div className="stop-content">
                  <h4>Inauguration</h4>
                  <span>9:30 am - 10:30 am</span>
                </div>
              </div>
              <div className="timeline-connector"></div>

              {/* 3 - Design Phase */}
              <div className="timeline-stop">
                <div className="stop-number">3</div>
                <div className="stop-icon">🧠</div>
                <div className="stop-content">
                  <h4>Design phase</h4>
                  <span>11:00 am - 1:00 pm</span>
                </div>
              </div>
              <div className="timeline-connector"></div>

              {/* 4 - Lunch */}
              <div className="timeline-stop">
                <div className="stop-number">4</div>
                <div className="stop-icon">🍽️</div>
                <div className="stop-content">
                  <h4>Design Phase Ends & Lunch</h4>
                  <span>1:00 pm - 2:00 pm</span>
                </div>
              </div>
            </div>

            {/* S-Curve Connector Right */}
            <div className="s-curve-right"></div>

            <div className="timeline-row row-2 reverse">
              {/* 5 - High Tea */}
              <div className="timeline-stop">
                <div className="stop-number">5</div>
                <div className="stop-icon">☕</div>
                <div className="stop-content">
                  <h4>High tea</h4>
                  <span>4:30 pm</span>
                </div>
              </div>
              <div className="timeline-connector reverse"></div>

              {/* 6 - Dinner */}
              <div className="timeline-stop">
                <div className="stop-number">6</div>
                <div className="stop-icon">🍲</div>
                <div className="stop-content">
                  <h4>Dinner</h4>
                  <span>7:00 pm - 8:00 pm</span>
                </div>
              </div>
              <div className="timeline-connector reverse"></div>

              {/* 7 - Judgement 1 */}
              <div className="timeline-stop">
                <div className="stop-number">7</div>
                <div className="stop-icon">⚖️</div>
                <div className="stop-content">
                  <h4>Phase II Judgement</h4>
                  <span>8:00 pm</span>
                </div>
              </div>
              <div className="timeline-connector reverse"></div>

              {/* 8 - Mid Night Tea */}
              <div className="timeline-stop">
                <div className="stop-number">8</div>
                <div className="stop-icon">🍵</div>
                <div className="stop-content">
                  <h4>High tea</h4>
                  <span>12:00 am</span>
                </div>
              </div>
            </div>

            {/* S-Curve Connector Left */}
            <div className="s-curve-left"></div>

            <div className="day-label" style={{ marginTop: '2rem' }}>
              <span className="day-dot"></span>
              <h3>Saturday</h3>
            </div>

            <div className="timeline-row row-3">
              {/* 9 - Breakfast */}
              <div className="timeline-stop">
                <div className="stop-number">9</div>
                <div className="stop-icon">🥐</div>
                <div className="stop-content">
                  <h4>Breakfast</h4>
                  <span>8:00 am</span>
                </div>
              </div>
              <div className="timeline-connector"></div>

              {/* 10 - Final Judgement */}
              <div className="timeline-stop">
                <div className="stop-number">10</div>
                <div className="stop-icon">🤖</div>
                <div className="stop-content">
                  <h4>Final Judgement</h4>
                  <span>11:00 am - 1:00 pm</span>
                </div>
              </div>
              <div className="timeline-connector"></div>

              {/* 11 - Lunch 2 */}
              <div className="timeline-stop">
                <div className="stop-number">11</div>
                <div className="stop-icon">🍛</div>
                <div className="stop-content">
                  <h4>Lunch</h4>
                  <span>1:00 pm</span>
                </div>
              </div>
              <div className="timeline-connector"></div>

              {/* 12 - Valedictory */}
              <div className="timeline-stop">
                <div className="stop-number">12</div>
                <div className="stop-icon">🏆</div>
                <div className="stop-content">
                  <h4>Valedictory & tea</h4>
                  <span>3:00 pm</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="prizes" className="section">
          <div className="section-header">
            <h2 className="section-title">Rewards & <span className="text-gradient">Recognition</span></h2>
            <p className="section-subtitle">Celebrate engineering excellence with prestigious titles and exciting rewards.</p>
          </div>

          <div className="prizes-grid">
            {/* WINNER */}
            <div className="prize-card">
              <div className="prize-category-label"><span>WINNER</span></div>
              <div className="prize-pool-label">Prize Pool Worth 2.5 Lakh+</div>
              <div className="prize-amount gold">₹25K</div>
              <ul className="prize-details">
                <li>25k cash prize</li>
                <li>Electronic kit and subscriptions</li>
                <li>IEEE Certificate</li>
              </ul>
            </div>

            {/* RUNNER */}
            <div className="prize-card">
              <div className="prize-category-label"><span>RUNNER</span></div>
              <div className="prize-pool-label">Prize Pool Worth 1.5 Lakh+</div>
              <div className="prize-amount silver">₹15K</div>
              <ul className="prize-details">
                <li>15k cash prize</li>
                <li>Electronic kit and subscriptions</li>
                <li>IEEE Certificate</li>
              </ul>
            </div>

            {/* SECOND RUNNER */}
            <div className="prize-card">
              <div className="prize-category-label"><span>2ND RUNNER</span></div>
              <div className="prize-pool-label">Prize Pool Worth 1.25 Lakh+</div>
              <div className="prize-amount bronze">₹10K</div>
              <ul className="prize-details">
                <li>10k cash prize</li>
                <li>Electronic kit and subscriptions</li>
                <li>IEEE Certificate</li>
              </ul>
            </div>

            {/* BEST WOMEN'S TEAM */}
            <div className="prize-card">
              <div className="prize-category-label"><span>BEST WOMEN</span></div>
              <div className="prize-pool-label">Prize Pool Worth 75k+</div>
              <div className="prize-amount">₹5K</div>
              <ul className="prize-details">
                <li>5k cash prize</li>
                <li>Goodies and swags</li>
                <li>IEEE Certificate</li>
              </ul>
            </div>

            {/* BEST IDEA */}
            <div className="prize-card">
              <div className="prize-category-label"><span>BEST IDEA</span></div>
              <div className="prize-pool-label">Prize Pool Worth 75k+</div>
              <div className="prize-amount">₹5K</div>
              <ul className="prize-details">
                <li>5k cash prize</li>
                <li>Goodies and swags</li>
                <li>IEEE Certificate</li>
              </ul>
            </div>

            {/* PARTICIPATION */}
            <div className="prize-card">
              <div className="prize-category-label"><span>PARTICIPATION</span></div>
              <div className="prize-pool-label">Prize Pool Worth 10k+</div>
              <div className="prize-amount" style={{ fontSize: '1.5rem', letterSpacing: '2px' }}>SWAGS</div>
              <ul className="prize-details">
                <li>Goodies and swags</li>
                <li>IEEE Certificate</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="section-header">
            <h2 className="section-title">SYMBIOT <span className="text-gradient">Moments</span></h2>
            <p className="section-subtitle">Highlights from previous SYMBIOT Hackathons</p>
          </div>

          <div className="gallery-years-container">
            {/* SYMBIOT 2024 */}
            <div className="gallery-year-section">
              <h3 className="gallery-year-title">SYMBIOT 2024</h3>
              <div className="gallery-grid">
                {[
                  "/symbiot-2024-1.jpg",
                  "/symbiot-2024-2.jpg",
                  "/symbiot-2024-3.jpg",
                  "/symbiot-2024-4.jpg"
                ].map((src, idx) => (
                  <div className="gallery-item" key={idx}>
                    <img src={src} alt="Symbiot 2024 Highlight" />
                    <div className="gallery-overlay"><span className="gallery-text">SYMBIOT 2024</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* SYMBIOT 2023 */}
            <div className="gallery-year-section">
              <h3 className="gallery-year-title">SYMBIOT 2023</h3>
              <div className="gallery-grid">
                {[
                  "/symbiot-2023-1.jpg",
                  "/symbiot-2023-2.jpg",
                  "/symbiot-2023-3.jpg",
                  "/symbiot-2023-4.jpg"
                ].map((src, idx) => (
                  <div className="gallery-item" key={idx}>
                    <img src={src} alt="Symbiot 2023 Highlight" />
                    <div className="gallery-overlay"><span className="gallery-text">SYMBIOT 2023</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* SYMBIOT 2022 */}
            <div className="gallery-year-section">
              <h3 className="gallery-year-title">SYMBIOT 2022</h3>
              <div className="gallery-grid">
                {[
                  "/symbiot-2022-1.jpg",
                  "/symbiot-2022-2.jpg",
                  "/symbiot-2022-3.jpg",
                  "/symbiot-2022-4.jpg"
                ].map((src, idx) => (
                  <div className="gallery-item" key={idx}>
                    <img src={src} alt="Symbiot 2022 Highlight" />
                    <div className="gallery-overlay"><span className="gallery-text">SYMBIOT 2022</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors" className="section sponsors-section">
          <div className="section-header">
            <h2 className="section-title"><span className="text-gradient">Sponsors</span></h2>
          </div>

          <div className="title-sponsor">
            <h3>Pravega Semi</h3>
          </div>

          <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem', fontFamily: 'Outfit, sans-serif' }}>Proud Sponsors</h3>
          <div className="sponsors-grid">
            {['VMARTAN', 'AWS', 'Taskade', 'Wolfram', 'Axure', 'Balsamiq', 'DNA', 'Leading Learners', 'Pixel Hut', 'Sidewalk Cafe'].map((sponsor, i) => (
              <div className="sponsor-card" key={i}>
                <div className="sponsor-name">{sponsor}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section">
          <div className="section-header">
            <h2 className="section-title"><span className="text-gradient">FAQ</span></h2>
            <p className="section-subtitle">Everything you need to know about SYMBIOT 2026</p>
          </div>
          <div className="faq-container">
            {[
              { q: 'Is this hackathon online or offline?', a: 'The hackathon will be conducted completely offline at Vidyavardhaka College of Engineering, Mysuru.' },
              { q: 'What is eligibility criteria?', a: 'Students from engineering colleges across India are eligible to participate. Participants must register in teams.' },
              { q: 'What is team structure?', a: 'Each team must consist of 3 to 4 members.' },
              { q: 'Will there be an internet access?', a: 'Yes, high-speed internet will be provided to all participants during the hackathon.' },
              { q: 'What is the cancellation policy?', a: 'Once registered, cancellation requests will not be eligible for refunds.' },
              { q: 'Is accommodation available for participants?', a: 'Accommodation support may be provided for outstation teams based on availability.' }
            ].map((faq, i) => (
              <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <span className="faq-icon">▼</span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-redesigned">
        <div className="footer-main">
          {/* Column 1: Logo */}
          <div className="footer-col footer-col-logo">
            <img src="/symbiot-teal-logo.png" alt="Symbiot Logo" className="footer-main-logo" />
          </div>

          <div className="footer-divider"></div>

          {/* Column 2: Venue */}
          <div className="footer-col footer-col-venue">
            <h4 className="footer-heading">Venue</h4>
            <p className="footer-text"><strong>24th - 25th April 2026</strong></p>
            <p className="footer-text">Vidyavardhaka College Of<br />Engineering 3rd stage,<br />Gokulam, Mysore - 570002</p>
          </div>

          <div className="footer-divider hidden-mobile"></div>

          {/* Column 3: Useful Links */}
          <div className="footer-col footer-col-links">
            <h4 className="footer-heading">Useful Links</h4>
            <ul className="footer-link-list">
              <li><a href="https://unstop.com/p/symbiot-2026-vidyavardhaka-college-of-engineering-mysore-1652707" target="_blank" rel="noopener noreferrer">Register Now</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-divider hidden-mobile"></div>

          {/* Column 4: Connect With Us */}
          <div className="footer-col footer-col-social">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="social-icons">
              
              <div className="contact-popup-container">
                <a href="#" className="social-icon" aria-label="Phone" onClick={(e) => handlePopupToggle(e, 'phone')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                </a>
                <div className={`contact-popup ${activePopup === 'phone' ? 'show' : ''}`}>
                  <div className="popup-title">Registration Co-Lead</div>
                  <div className="popup-value">K Goutam<br/>+91 7646903404</div>
                </div>
              </div>

              <div className="contact-popup-container">
                <a href="#" className="social-icon" aria-label="Email" onClick={(e) => handlePopupToggle(e, 'email')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </a>
                <div className={`contact-popup ${activePopup === 'email' ? 'show' : ''}`}>
                  <div className="popup-title">Queries & Support</div>
                  <div className="popup-value">symbiot@vvce.ac.in</div>
                </div>
              </div>

              <div className="contact-popup-container">
                <a href="#" className="social-icon" aria-label="Location" onClick={(e) => handlePopupToggle(e, 'location')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </a>
                <div className={`contact-popup ${activePopup === 'location' ? 'show' : ''}`}>
                  <div className="popup-title">Venue</div>
                  <div className="popup-value" style={{ fontSize: '0.95rem' }}>VVCE 3rd stage, Gokulam,<br/>Mysore - 570002</div>
                </div>
              </div>

              <a href="https://www.instagram.com/iotcrew.vvce/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>Copyright © 2026 All rights reserved | Made with <span className="heart">❤️</span> by <strong>IoTCrew</strong></p>
        </div>
      </footer>
    </>
  );
};

export default App;
