import React from 'react';

export default function About() {
  return (
    <section className="resume-section lightblue" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          About Me
        </h1>
        <p className="lead mb-3" style={{ fontWeight: 'bold' }}>
          Seeking 2025 Full Time Positions in Data and Supply Chain
        </p>
        <p className="lead mb-3">
          Hello! I'm Rome, a data enthusiast with a passion in data engineering and supply chain management.
          I enjoy building data pipelines and applying predictive modeling to enhance efficiency and streamline operations.
          With expertise in tools like Python, SQL, Tableau, AWS, Azure, I transform complex data into actionable insights
          that drive strategic business decisions. I'm committed to continuous learning and innovation in supply chain management.
        </p>
        <p className="lead mb-3">
          In my free time, I enjoy exercising, golfing, and exploring nature through hiking and camping.
          I also enjoy traveling and meeting new people and cultures.
        </p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/kuan-wei-rome-lin/" aria-label="Kuan-Wei Rome Lin's LinkedIn profile">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="https://github.com/KuanWei0819" aria-label="Kuan-Wei Rome Lin's GitHub profile">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
