import React from 'react';

export default function Skills() {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content container">
        <h2 className="mb-5">Skills</h2>

        <div className="mb-4">
          <h4 className="fw-bold">Programming Languages & Tools</h4>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML/CSS</li>
            <li>Tableau / Power BI</li>
            <li>Microsoft Azure</li>
            <li>AWS</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="fw-bold">Languages & Soft Skills</h4>
          <ul>
            <li>English</li>
            <li>Mandarin Chinese</li>
            <li>Professional Communication</li>
            <li>Project Management</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="fw-bold">Certifications</h4>
          <ul>
            <li>AWS Certified Cloud Practitioner</li>
            <li>Lean Six Sigma Green Belt</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
