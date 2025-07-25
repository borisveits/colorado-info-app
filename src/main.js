import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-brand">
        <h2>Portfolio</h2>
      </div>
      <div class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">Alex Johnson</span>
          </h1>
          <p class="hero-subtitle">
            Full-stack developer passionate about creating beautiful, functional web experiences
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">View My Work</button>
            <button class="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="profile-card">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Profile" class="profile-img">
            <div class="status-indicator"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Passionate about technology and innovation</p>
      </div>
      <div class="about-grid">
        <div class="about-text">
          <p>I'm a dedicated full-stack developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.</p>
          <div class="skills">
            <div class="skill-tag">JavaScript</div>
            <div class="skill-tag">React</div>
            <div class="skill-tag">Node.js</div>
            <div class="skill-tag">Python</div>
            <div class="skill-tag">TypeScript</div>
            <div class="skill-tag">CSS</div>
          </div>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div class="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat-card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Some of my recent work</p>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" alt="E-commerce Platform" class="project-image">
          <div class="project-content">
            <h3>E-commerce Platform</h3>
            <p>A modern e-commerce solution built with React and Node.js, featuring real-time inventory management.</p>
            <div class="project-tags">
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
              <span class="tag">MongoDB</span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <img src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Task Management App" class="project-image">
          <div class="project-content">
            <h3>Task Management App</h3>
            <p>A collaborative task management application with real-time updates and team collaboration features.</p>
            <div class="project-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Firebase</span>
              <span class="tag">PWA</span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Analytics Dashboard" class="project-image">
          <div class="project-content">
            <h3>Analytics Dashboard</h3>
            <p>A comprehensive analytics dashboard with interactive charts and real-time data visualization.</p>
            <div class="project-tags">
              <span class="tag">React</span>
              <span class="tag">D3.js</span>
              <span class="tag">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="section-header">
        <h2 class="section-title">Let's Work Together</h2>
        <p class="section-subtitle">Ready to start your next project?</p>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>alex@example.com</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
        <form class="contact-form">
          <div class="form-group">
            <input type="text" placeholder="Your Name" class="form-input">
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email" class="form-input">
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" rows="5" class="form-input"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Send Message</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Alex Johnson. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
`

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href')
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Thank you for your message! I\'ll get back to you soon.')
})

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav')
  if (window.scrollY > 100) {
    nav.classList.add('nav-scrolled')
  } else {
    nav.classList.remove('nav-scrolled')
  }
})