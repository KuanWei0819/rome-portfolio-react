import React from 'react';

export default function Education() {
  return (
    <section className="resume-section bg-light py-5" id="education">
      <div className="resume-section-content container">
        <h2 className="mb-5">Education</h2>

        <div className="mb-4">
          <h4 className="fw-bold">University of Washington</h4>
          <div className="text-muted mb-2">Sept. 2023 – June 2025</div>
          <p className="mb-1">Master of Science in Data Science and Business Intelligence</p>
          <p className="text-muted">GPA: 3.9</p>
        </div>

        <div className="mb-4">
          <h4 className="fw-bold">University of Washington</h4>
          <div className="text-muted mb-2">Sept. 2017 – March 2021</div>
          <p className="mb-1">Bachelor of Arts in Supply Chain Management</p>
          <p className="text-muted">GPA: 3.7</p>
        </div>
      </div>
    </section>
  );
}
